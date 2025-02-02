const REPO_OWNER = "tscircuit"
const REPO_NAME = "contribution-tracker"

const REPO_BASE_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`
const RAW_CONTENT_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main`
const CONTRIBUTION_OVERVIEWS_PATH = "contribution-overviews"

export const getContributionOverviewsUrl = () =>
  `${REPO_BASE_URL}/contents/${CONTRIBUTION_OVERVIEWS_PATH}`

export const getContributionOverviewMarkdownUrl = (date: string) =>
  `${RAW_CONTENT_URL}/${CONTRIBUTION_OVERVIEWS_PATH}/${date}.md`

export const getPullRequestUrl = (repo: string, prNumber: number) =>
  `https://github.com/${repo}/pull/${prNumber}`
