# Contribution-Based Discord Roles

This repository manages Discord roles based on your weekly GitHub contributions. To get your role, follow the steps below.

## How to Register

1. **Fork this Repository**  
   Click the **Fork** button on the top right to create your own copy.

2. **Clone Your Fork**  
   ```sh
   git clone https://github.com/tscircuit/contribution-tracker.git
   cd contribution-tracker
   ```

3. **Edit `users.json`**  
   Open the `users.json` file and add your details in the following format:
   ```json
   {
     "your_discord_user_id": "your_github_username"
   }
   ```
   - Replace `your_discord_user_id` with your **Discord User ID** (not username). You can find it by enabling Developer Mode in Discord settings and right-clicking your profile.
   - Replace `your_github_username` with your **GitHub username**.
   - Ensure the JSON format remains valid.

4. **Commit Your Changes**  
   ```sh
   git add users.json
   git commit -m "Added my Discord ID and GitHub username"
   git push origin main
   ```

5. **Create a Pull Request**  
   - Visit your fork on GitHub.
   - Click **Compare & pull request**.
   - Provide a brief description and submit the PR.

## Approval & Sync
Once your PR is reviewed and merged, the bot will automatically track your weekly GitHub contributions and assign roles in the Discord server accordingly.
