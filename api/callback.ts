// @ts-nocheck

import ky from "ky";
import fs from "fs";
import { Octokit } from "@octokit/rest";
interface DiscordTokenResponse {
  access_token: string;
}

interface DiscordUser {
  id: string;
}

interface DiscordConnection {
  type: string;
  name: string;
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
  // Extract the access token from the URL fragment
  const fragment = new URL(request.url).hash.substring(1);
  const params = new URLSearchParams(fragment);
  const accessToken = params.get("access_token");
console.log(55, request)
  if (!accessToken) {
    return Response.json(
      { message: "No access token found in URL fragment" },
      { status: 400 }
    );
  }

  try {
    // Fetch Discord user info
    const userInfoResponse = await ky.get("https://discord.com/api/v10/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).json();
    console.log(userInfoResponse)
    // if (!userInfoResponse) {
    //   return Response.json(
    //     { message: "Failed to fetch user info" },
    //     { status: 500 }
    //   );
    // }

    const userInfo = userInfoResponse;
    const discordId = userInfo.id;

    if (!discordId) {
      return Response.json(
        { message: "No Discord ID found" },
        { status: 500 }
      );
    }

    // Fetch Discord connections (e.g., GitHub account)
    const connectionsResponse = await fetch("https://discord.com/api/v10/users/@me/connections", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!connectionsResponse.ok) {
      return Response.json(
        { message: "Failed to fetch connections" },
        { status: 500 }
      );
    }

    const connections = await connectionsResponse.json();
    const githubConnection = connections.find(
      (connection: any) => connection.type === "github"
    );

    if (!githubConnection) {
      return Response.json(
        { message: "No GitHub connection found" },
        { status: 500 }
      );
    }

    const githubUsername = githubConnection.name;

    if (!githubUsername) {
      return Response.json(
        { message: "No GitHub username found" },
        { status: 500 }
      );
    }

    // Save user data (this part assumes you have a createPullRequest function)
    const userData: Record<string, string> = { [discordId]: githubUsername };
    const branchName = `add-github-username-${Date.now()}-${githubUsername}`;

    await createPullRequest(branchName, userData);

    return new Response("GitHub username saved successfully!", { status: 200 });
  } catch (error) {
    console.error("Error handling callback:", error);
    return Response.json(
      { message: `Error: ${error}` },
      { status: 500 }
    );
  }
}

