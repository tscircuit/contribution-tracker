import { octokit } from "../index"

export async function getRepos(): Promise<string[]> {
  if (process.env.FULL_REPO_LIST) {
    let repos: string[] = [];
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const response = await octokit.rest.repos.listForOrg({
        org: "tscircuit",
        type: "public",
        per_page: 100,
        page: page,
      });

      repos = repos.concat(response.data.map((repo) => repo.full_name));

      hasNextPage = response.data.length === 100;
      page++;
    }

    return repos;
  }

  return [
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
