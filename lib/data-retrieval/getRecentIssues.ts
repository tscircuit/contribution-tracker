import { octokit } from "lib/sdks"

export async function getRecentIssues(repo: string, since: string) {
  const [owner, repoName] = repo.split("/")
  const { data } = await octokit.issues.listForRepo({
    owner,
    repo: repoName,
    state: "all",
    sort: "created",
    direction: "desc",
    per_page: 100,
    since,
  })

  return data.filter((issue) => !issue.pull_request)
}
