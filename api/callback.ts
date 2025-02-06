import ky from "ky"
import fs from "fs"
import { Octokit } from "@octokit/rest"

// Helper function to create a pull request
async function createPullRequest(
  branchName: string,
  content: Record<string, string>,
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  try {
    // Create a new branch
    await octokit.git.createRef({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      ref: `refs/heads/${branchName}`,
      sha: (
        await octokit.repos.get({
          owner: process.env.GITHUB_REPO_OWNER!,
          repo: process.env.GITHUB_REPO_NAME!,
        })
      ).data.default_branch!,
    })

    // Update users.json in the new branch
    const usersFilePath = "users.json"
    const existingContent = fs.existsSync(usersFilePath)
      ? fs.readFileSync(usersFilePath, "utf8")
      : "{}"
    const updatedContent = JSON.stringify(
      { ...JSON.parse(existingContent), ...content },
      null,
      2,
    )

    await octokit.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      path: usersFilePath,
      message: "Update users.json with new GitHub username",
      content: Buffer.from(updatedContent).toString("base64"),
      branch: branchName,
      sha: (
        await octokit.repos.getContent({
          owner: process.env.GITHUB_REPO_OWNER!,
          repo: process.env.GITHUB_REPO_NAME!,
          path: usersFilePath,
        })
      ).data.sha!,
    })

    // Create the pull request
    await octokit.pulls.create({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      title: "Add new GitHub username",
      body: "Automated PR to add a new GitHub username.",
      head: branchName,
      base: "main", // Or your default branch
    })
  } catch (error) {
    console.error("Error creating pull request:", error)
    throw error
  }
}

export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get("code")

  if (!code) {
    return Response.json({message: "Missing authorization code."}, { status: 400 })
  }

  try {
    // Exchange code for access token
    const tokenResponse = await ky
      .post("https://discord.com/api/v10/oauth2/token", {
        json: {
          client_id: process.env.DISCORD_CLIENT_ID,
          client_secret: process.env.DISCORD_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: process.env.REDIRECT_URI!,
          scope: "identify connections",
        },
      })
      .json<any>()

    const accessToken = tokenResponse.access_token

    if (!accessToken) {
      return Response.json(
        { message: "Failed to retrieve access token." },
        { status: 400 },
      )
    }

    // Fetch Discord user info
    const userInfoResponse = await ky
      .get("https://discord.com/api/v10/users/@me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .json<any>()

    const discordId = userInfoResponse.id

    // Fetch Discord connections (GitHub account)
    const connectionsResponse = await ky
      .get("https://discord.com/api/v10/users/@me/connections", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .json<any[]>()

    const githubConnection = connectionsResponse.find(
      (connection) => connection.type === "github",
    )

    if (!githubConnection) {
      return Response.json(
        { message: "No connected GitHub account found." },
        { status: 400 },
      )
    }

    const githubUsername = githubConnection.name

    // Save data to users.json
    const userData: Record<string, string> = { [discordId]: githubUsername }

    // Generate a unique branch name
    const branchName = `add-github-username-${Date.now()}-${githubUsername}`

    // Create a pull request with the updated data
    await createPullRequest(branchName, userData)

    return new Response("GitHub username saved successfully!", { status: 200 })
  } catch (error) {
    console.error("Error handling callback:", error)
    return new Response("An error occurred.", { status: 500 })
  }
}
