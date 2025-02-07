import { Octokit } from "@octokit/rest"
import { unwrapPromise } from "shared/unwrap"
import path from "path"

// Helper function to validate environment variables
function validateEnvVars(): void {
  const requiredVars = ["GITHUB_REPO_OWNER", "GITHUB_REPO_NAME", "GITHUB_TOKEN"]
  for (const key of requiredVars) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`)
    }
  }
}

// Function to create a pull request
async function createPullRequest(
  branchName: string,
  content: Record<string, string>,
): Promise<void> {
  validateEnvVars()

  const owner = process.env.GITHUB_REPO_OWNER!
  const repo = process.env.GITHUB_REPO_NAME!
  const token = process.env.GITHUB_TOKEN!
  const octokit = new Octokit({ auth: token })
  const usersFilePath = "users.json"

  // Get the default branch
  const [repoData, repoError] = await unwrapPromise(
    octokit.repos.get({ owner, repo }),
  )
  if (repoError) throw new Error("Failed to fetch repository data.")
  const defaultBranch = repoData.data.default_branch

  // Get the latest commit SHA from the default branch
  const [branchData, branchError] = await unwrapPromise(
    octokit.repos.getBranch({ owner, repo, branch: defaultBranch }),
  )
  if (branchError) throw new Error("Failed to fetch branch data.")
  const latestCommitSha = branchData.data.commit.sha

  // Create a new branch from the latest commit
  const [, newBranchError] = await unwrapPromise(
    octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: latestCommitSha,
    }),
  )
  if (newBranchError) throw new Error("Failed to create new branch.")

  // Fetch the existing users.json content from the repository
  let existingContent: Record<string, string> = {}
  let fileSha: string | undefined
  const [fileData, fileError]: [any, any] = await unwrapPromise(
    octokit.repos.getContent({
      owner,
      repo,
      path: usersFilePath,
      ref: defaultBranch,
    }),
  )

  if (!fileError && !Array.isArray(fileData.data) && fileData.data.content) {
    const decodedContent = Buffer.from(
      fileData.data.content,
      "base64",
    ).toString("utf8")
    existingContent = JSON.parse(decodedContent)
    fileSha = fileData.data.sha
  }

  // Append new content without overwriting existing data
  const updatedContent = { ...existingContent, ...content }
  const encodedContent = Buffer.from(
    JSON.stringify(updatedContent, null, 2),
  ).toString("base64")

  // Update or create the users.json file in the new branch
  const [, fileUpdateError] = await unwrapPromise(
    octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: usersFilePath,
      message: "Append new GitHub username",
      content: encodedContent,
      branch: branchName,
      sha: fileSha,
    }),
  )
  if (fileUpdateError) throw new Error("Failed to update or create file.")

  // Create the pull request
  const [, pullRequestError] = await unwrapPromise(
    octokit.pulls.create({
      owner,
      repo,
      title: "Sync GitHub username",
      body: `Automated PR created by **tscircuit** to sync new GitHub usernames.\nFor @${Object.values(content)[0]}`,
      head: branchName,
      base: defaultBranch,
    }),
  )
  if (pullRequestError) throw new Error("Failed to create pull request.")
}

// Handler for GET requests
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return new Response(
      JSON.stringify({ error: "No authorization code found" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  // Exchange the code for an access token
  const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID!,
      client_secret: process.env.DISCORD_CLIENT_SECRET!,
      grant_type: "authorization_code",
      code,
      redirect_uri: new URL("/api/callback", request.url).toString(),
    }),
  })

  if (!tokenResponse.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to get access token" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  const tokenData = await tokenResponse.json()
  const accessToken = tokenData.access_token

  // Fetch user connections
  const userConnectionsResponse = await fetch(
    "https://discord.com/api/v10/users/@me/connections",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  if (!userConnectionsResponse.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch user connections" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  const userConnectionsInfo: Array<{ type: string; name: string }> =
    await userConnectionsResponse.json()
  const githubConnection = userConnectionsInfo.find((x) => x.type === "github")

  if (!githubConnection) {
    return new Response("", {
      status: 302,
      headers: { Location: "/?no-github-connection" },
    })
  }

  // Fetch user info
  const userResponse = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  if (!userResponse.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch user info" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  const userResponseInfo = await userResponse.json()
  const githubUsername = githubConnection.name
  const discordId = userResponseInfo.id

  // Checking if exists
  const usersData: any = await Bun.file(
    path.join(process.cwd(), "users.json"),
  ).json()
  if (usersData[`${discordId}`]) {
    return new Response("", {
      status: 302,
      headers: { Location: "/?account-already-present" },
    })
  }

  // Create a pull request with the new GitHub username
  try {
    await createPullRequest(
      `add-github-username-${Date.now()}-${githubUsername}`,
      {
        [discordId]: githubUsername,
      },
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  return new Response("", {
    status: 302,
    headers: { Location: "/?sync-request-created" },
  })
}

export type Result<T, E = Error> = [T, null] | [null, E]

export async function unwrapPromise<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const data = await promise
    return [data, null]
  } catch (err) {
    return [null, err as E]
  }
}

export function unwrapSync<T, E = Error>(fn: () => T): Result<T, E> {
  try {
    return [fn(), null]
  } catch (err) {
    return [null, err as E]
  }
}
