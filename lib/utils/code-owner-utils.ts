import { octokit } from "lib/sdks"

interface CodeOwnerEntry {
  paths: string[]
  owners: string[]
}

export const parseCodeownersFile = (fileContent: string): CodeOwnerEntry[] => {
  if (!fileContent) {
    return []
  }

  const result = fileContent
    .split("\n")
    .filter((line) => line.trim() && !line.trim().startsWith("#"))
    .map((line) => {
      const trimmedLine = line.trim()
      const [paths, ...owners] = trimmedLine.split(/\s+/)
      return {
        paths: paths.split(" "),
        owners: owners
          .filter((owner) => owner && !owner.includes("/"))
          .map((owner) => owner.replace(/^@/, "")),
      }
    })
  console.log("Parsed CODEOWNERS entries:", result)
  return result
}

export const fetchCodeownersFile = async (
  repo: string,
): Promise<CodeOwnerEntry[]> => {
  console.log(`Fetching CODEOWNERS file for ${repo}`)

  const [owner, repoName] = repo.split("/")
  const pathsToTry = [".github/CODEOWNERS", "CODEOWNERS"]

  for (const path of pathsToTry) {
    try {
      const response = await octokit.raw.fetchFile({
        owner,
        repo: repoName,
        path,
      })
      return parseCodeownersFile(response.data)
    } catch (error: any) {
      if (error.status === 404 || error.message === "File not found") {
        continue
      }
      console.error(
        `Error fetching CODEOWNERS from ${path} for ${repo}:`,
        error,
      )
      return []
    }
  }

  return []
}
