# How to Create a Demo Video for PR Commenting

This document outlines the steps to create a demo video showcasing the new functionality of automatically commenting on pull requests.

## 1. Prerequisites

*   You have a test pull request in a GitHub repository. It can be open or closed.
*   You have screen recording software (e.g., OBS Studio, QuickTime, Windows Game Bar).
*   Your `.env` file is properly configured with the necessary GitHub tokens (`GITHUB_TOKEN`).

## 2. Recording Steps

1.  **Open Your Tools:**
    *   Open your terminal in the root of the `contribution-tracker` project.
    *   Open a web browser and navigate to the GitHub pull request you want to use for the demo.
    *   Start your screen recording software.

2.  **Execute the Test Script:**
    *   In your terminal, run the following command, replacing `<owner>/<repo>` and `<pr_number>` with your test PR's information.

    ```bash
    bun run scripts/test-pr-comment.ts <owner>/<repo> <pr_number>
    ```

    *   For example:
    ```bash
    bun run scripts/test-pr-comment.ts tscircuit/contribution-tracker 123
    ```

3.  **Show the Results:**
    *   Keep the recording running.
    *   The script will output logs to the console. Point out the success message at the end.
    *   Switch to your web browser.
    *   Refresh the GitHub pull request page.
    *   Scroll down to find the new comment posted by the `tscircuitbot`. It should look something like this:

    > Thank you for your contribution! 🎉
    >
    > **PR Rating:** ⭐⭐⭐ (significant)
    > **Contribution Level:** ⭐⭐⭐ (significant)
    > **Impact:** Minor
    >
    > Track your contributions and see the leaderboard at: [tscircuit Contribution Tracker](https://contributions.tscircuit.com)
    >
    > ---
    >
    > *Comment posted by tscircuitbot*

4.  **Finalize:**
    *   Stop the screen recording.
    *   Save the video file.
