import { octokit } from "../index"

export async function getRepos(): Promise<string[]> {
  if (process.env.FULL_REPO_LIST) {
    return await octokit.rest.repos
      .listForOrg({
        org: "tscircuit",
        type: "public",
        per_page: 100,
      })
      .then((res) => res.data.map((repo) => repo.full_name))
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
