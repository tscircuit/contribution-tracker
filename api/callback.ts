import ky from "ky"
import fs from "fs"
import { Octokit } from "@octokit/rest"
interface DiscordTokenResponse {
  access_token: string
}

interface DiscordUser {
  id: string
}

interface DiscordConnection {
  type: string
  name: string
}

// Helper function to create a pull request
async function createPullRequest(
  branchName: string,
  content: Record<string, string>,
): Promise<void> {
  const owner = process.env.GITHUB_REPO_OWNER
  const repo = process.env.GITHUB_REPO_NAME
  const token = process.env.GITHUB_TOKEN
  if (!owner || !repo || !token) {
    throw new Error("Missing required github environment variables")
  }

  const octokit = new Octokit({ auth: token })

  try {
    // Get repository details to determine the default branch
    const { data: repoData } = await octokit.repos.get({ owner, repo })
    const defaultBranch = repoData.default_branch
    if (!defaultBranch) {
      throw new Error("Default branch not found")
    }

    // Get the commit SHA of the default branch
    const { data: branchData } = await octokit.repos.getBranch({
      owner,
      repo,
      branch: defaultBranch,
    })
    const commitSha = branchData.commit.sha

    // Create a new branch from the default branch commit SHA
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: commitSha,
    })

    // Prepare the updated content for users.json
    const usersFilePath = "users.json"
    let existingContent: string
    if (fs.existsSync(usersFilePath)) {
      existingContent = fs.readFileSync(usersFilePath, "utf8")
    } else {
      existingContent = "{}"
    }
    const parsedExisting = JSON.parse(existingContent) as Record<
      string,
      unknown
    >
    const updatedContentObject = { ...parsedExisting, ...content }
    const updatedContent = JSON.stringify(updatedContentObject, null, 2)

    // Try to get the current file's SHA (if it exists) on the new branch
    let fileSha: string | undefined
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: usersFilePath,
        ref: branchName,
      })
      if (!Array.isArray(data)) {
        fileSha = data.sha
      }
    } catch (err: any) {
      if (err.status !== 404) {
        throw err
      }
    }

    // Create or update the file contents in the new branch
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: usersFilePath,
      message: "Update users.json with new GitHub username",
      content: Buffer.from(updatedContent).toString("base64"),
      branch: branchName,
      sha: fileSha,
    })

    // Create the pull request using the default branch as the base
    await octokit.pulls.create({
      owner,
      repo,
      title: "Add new GitHub username",
      body: "Automated PR to add a new GitHub username.",
      head: branchName,
      base: defaultBranch,
    })
  } catch (error) {
    console.error("Error creating pull request:", error)
    throw error
  }
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const data = {
    client_id: process.env.DISCORD_CLIENT_ID!,
    client_secret: process.env.DISCORD_CLIENT_SECRET!,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: new URL("/api/callback", request.url).toString(),
  }
  if (!code) {
    return new Response(
      JSON.stringify({ error: "No authorization code found" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID!,
        client_secret: process.env.DISCORD_CLIENT_SECRET!,
        grant_type: "authorization_code",
        code: code,
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

    // Fetch user info
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
    const githubConnection = Array.from(userConnectionsInfo).find(
      (x) => x.type == "github",
    )

    if (!githubConnection) {
      return new Response("", {
        status: 302,
        headers: { Location: "/?no-github-connection" },
      })
    }

    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const userResponseInfo = await userResponse.json()

    if (!userResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch user info" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const githubUsername = githubConnection.name
    const discordId = userResponseInfo.id

    const userData: Record<string, string> = {
      [discordId]: githubUsername,
    }

    await createPullRequest(
      `add-github-username-${Date.now()}-${githubUsername}`,
      userData,
    )

    return new Response("", {
      status: 302,
      headers: { Location: "/?sync-request-created" },
    })
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || String(error) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
