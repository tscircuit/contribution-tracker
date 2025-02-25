import * as fs from "fs"
import * as path from "path"
import axios from "redaxios"
import { getRepos } from "lib/data-retrieval/getRepos"

const repositories: string[] = await getRepos()

async function fetchReadme(repo: string): Promise<string> {
  const url = `https://api.github.com/repos/${repo}/readme`
  const response = await axios.get(url, {
    headers: { Accept: "application/vnd.github.v3.raw" },
  })
  return response.data
}

async function aggregateReadmes() {
  let megaReadme = ""

  for (const repo of repositories) {
    try {
      const readme = await fetchReadme(repo)
      megaReadme += `# ${repo}\n\n${readme}\n\n---\n\n`
    } catch (error) {
      console.error(`Error fetching README for ${repo}:`, error)
    }
  }

  fs.writeFileSync("mega_repo_readme.md", megaReadme)
  console.log("Mega README created successfully!")
}

aggregateReadmes()
