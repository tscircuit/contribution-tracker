# Add your Open Collective profile

Edit [`sponsorship-profiles.json`](../sponsorship-profiles.json) and replace `null`
under your GitHub username with your public Open Collective profile link:

```json
{
  "your-github-username": {
    "openCollectiveProfileUrl": "https://opencollective.com/your-profile"
  }
}
```

1. Sign in to Open Collective and copy your personal profile's URL. Your Open
   Collective username can differ from your GitHub username.
2. Find your existing GitHub username in the file, or add an entry using the same
   username shown in the [sponsorship CSVs](../sponsorships).
3. Set `openCollectiveProfileUrl` to your own public profile URL and open a PR.
   Leave other contributors' entries unchanged.

For a real example, Abse2001's GitHub account maps to the Open Collective profile
[opencollective.com/abse](https://opencollective.com/abse):

```json
{
  "Abse2001": {
    "openCollectiveProfileUrl": "https://opencollective.com/abse"
  }
}
```

To make this change on GitHub without a local checkout, open
[`sponsorship-profiles.json`](../sponsorship-profiles.json), click the pencil icon
(**Edit this file**), update your entry, and use **Commit changes** to propose the
change on a new branch and open a pull request. Use your own profile URL rather
than copying the example's URL.

`null` means the profile has not been provided. The initial entries come from the
September and October 2026 sponsorship CSVs; contributors not listed can add
themselves. The list is registration data, not a list of sponsorship eligibility.

Only add a public profile link. Keep bank, identity, and tax details in Open
Collective's private forms. Maintainers should review profile changes because the
mapping will identify future expense recipients.

This file only collects profile links. Adding an entry does not create an expense,
send an invitation, change sponsorship amounts, or trigger payment. Connecting the
profile links to expense automation is a separate change. Existing GitHub identity
handling and Discord registration in `users.json` are unchanged.
