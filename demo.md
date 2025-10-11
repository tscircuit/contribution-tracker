# Demo Steps for PR Commenting Feature

This document outlines the steps to test the new feature for commenting on Pull Requests with their contribution level.

## 1. Prerequisites

- You have a fork of the `tscircuit/contribution-tracker` repository.
- You have `bun` installed.
- You have a GitHub Personal Access Token (PAT) with the `repo` or `public_repo` scope. You can create one [here](https://github.com/settings/tokens).

## 2. Setup

1.  **Checkout the feature branch:**

    ```bash
    git fetch origin pull/228/head:feat/comment-on-prs
    git checkout feat/comment-on-prs
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your GitHub token:

    ```
    GITHUB_TOKEN=your-github-personal-access-token
    ```

    Replace `your-github-personal-access-token` with your actual GitHub PAT.

## 3. Testing

1.  **Create a test Pull Request:**

    On your fork of the `tscircuit/contribution-tracker` repository, create a new branch and make a small change. Then, open a Pull Request. Note the PR number.

2.  **Run the test script:**

    Execute the test script with your repository name and the PR number from the previous step.

    ```bash
    bun run scripts/test-pr-comment.ts <your-github-username>/contribution-tracker <pr-number>
    ```

    For example:

    ```bash
    bun run scripts/test-pr-comment.ts Excellencedev/contribution-tracker 15
    ```

3.  **Verify the comment:**

    Check the Pull Request on GitHub. You should see a new comment posted by the user associated with your GitHub token, detailing the contribution level.

## 4. Creating the Demo Video

1.  Start your screen recording.
2.  Show the test Pull Request on GitHub before running the script.
3.  In your terminal, run the test script as shown in step 3.2.
4.  Show the script running and finishing successfully.
5.  Refresh the Pull Request page on GitHub.
6.  Show the new comment that has been posted.
7.  Stop the screen recording.
