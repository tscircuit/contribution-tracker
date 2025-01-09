import { octokit } from "./sdks"

export async function getRepos(): Promise<string[]> {
  if (process.env.SHORT_REPO_LIST) {
    if (process.env.SHORT_REPO_LIST.includes("tscircuit/")) {
      return process.env.SHORT_REPO_LIST.split(",")
    }
    return [
      "tscircuit/snippets",
      "tscircuit/tscircuit",
      "tscircuit/cli",
      "tscircuit/react-fiber",
      "tscircuit/builder",
      "tscircuit/schematic-viewer",
      "tscircuit/pcb-viewer",
      "tscircuit/3d-viewer",
      "tscircuit/soup",
      "tscircuit/props",
      "tscircuit/jscad-fiber",
    ]
  }

  let repos: string[] = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const response = await octokit.repos.listForOrg({
      org: "tscircuit",
      type: "public",
      per_page: 100,
      page: page,
    })

    repos = repos.concat(response.data.map((repo: any) => repo.full_name))

    hasNextPage = response.data.length === 100
    page++
  }

  // Process complete

  return repos
}
