import ky from "ky";
import fs from "fs";
import { Octokit } from "@octokit/rest";

// Type definitions for Discord API responses
interface DiscordTokenResponse {
  access_token: string;
  // other fields omitted for brevity
}

interface DiscordUser {
  id: string;
  // additional fields can be added as needed
}

interface DiscordConnection {
  type: string;
  name: string;
  // additional fields can be added as needed
}

// Helper function to create a pull request
async function createPullRequest(
  branchName: string,
  content: Record<string, string>
): Promise<void> {
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;
  const token = process.env.GITHUB_TOKEN;
  if (!owner || !repo || !token) {
    // Even in helper functions, errors propagate via exceptions so that the GET handler can return the proper response.
    throw new Error("Missing required environment variables");
  }

  const octokit = new Octokit({ auth: token });

  try {
    // Get repository details to determine the default branch
    const { data: repoData } = await octokit.repos.get({ owner, repo });
    const defaultBranch = repoData.default_branch;
    if (!defaultBranch) {
      throw new Error("Default branch not found");
    }

    // Get the commit SHA of the default branch
    const { data: branchData } = await octokit.repos.getBranch({
      owner,
      repo,
      branch: defaultBranch,
    });
    const commitSha = branchData.commit.sha;

    // Create a new branch from the default branch commit SHA
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: commitSha,
    });

    // Prepare the updated content for users.json
    const usersFilePath = "users.json";
    let existingContent: string;
    if (fs.existsSync(usersFilePath)) {
      existingContent = fs.readFileSync(usersFilePath, "utf8");
    } else {
      existingContent = "{}";
    }
    const parsedExisting = JSON.parse(existingContent) as Record<string, unknown>;
    const updatedContentObject = { ...parsedExisting, ...content };
    const updatedContent = JSON.stringify(updatedContentObject, null, 2);

    // Try to get the current file's SHA (if it exists) on the new branch
    let fileSha: string | undefined;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: usersFilePath,
        ref: branchName,
      });
      if (!Array.isArray(data)) {
        fileSha = data.sha;
      }
    } catch (err: any) {
      if (err.status !== 404) {
        throw err;
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
    });

    // Create the pull request using the default branch as the base
    await octokit.pulls.create({
      owner,
      repo,
      title: "Add new GitHub username",
      body: "Automated PR to add a new GitHub username.",
      head: branchName,
      base: defaultBranch,
    });
  } catch (error) {
    console.error("Error creating pull request:", error);
    throw error;
  }
}

export async function GET(request: Request): Promise<Response> {
  const code = new URL(request.url).searchParams.get("code");

  if (!code) {
    return Response.json(
      { message: "No code provided" },
      { status: 500 }
    );
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
      .json<DiscordTokenResponse>();

    const accessToken = tokenResponse.access_token;
    if (!accessToken) {
      return Response.json(
        { message: "No access token found" },
        { status: 500 }
      );
    }

    // Fetch Discord user info
    const userInfoResponse = await ky
      .get("https://discord.com/api/v10/users/@me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .json<DiscordUser>();

    const discordId = userInfoResponse.id;
    if (!discordId) {
      return Response.json(
        { message: "No Discord Id Found" },
        { status: 500 }
      );
    }

    // Fetch Discord connections (GitHub account)
    const connectionsResponse = await ky
      .get("https://discord.com/api/v10/users/@me/connections", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .json<DiscordConnection[]>();

    const githubConnection = connectionsResponse.find(
      (connection) => connection.type === "github"
    );
    if (!githubConnection) {
      return Response.json(
        { message: "No github connection found" },
        { status: 500 }
      );
    }

    const githubUsername = githubConnection.name;
    if (!githubUsername) {
      return Response.json(
        { message: "No github username found" },
        { status: 500 }
      );
    }

    // Save data to users.json
    const userData: Record<string, string> = { [discordId]: githubUsername };

    // Generate a unique branch name
    const branchName = `add-github-username-${Date.now()}-${githubUsername}`;

    // Create a pull request with the updated data
    await createPullRequest(branchName, userData);

    return new Response("GitHub username saved successfully!", { status: 200 });
  } catch (error) {
    console.error("Error handling callback:", error);
    return Response.json(
      { message: `${error}` },
      { status: 500 }
    );
  }
}
