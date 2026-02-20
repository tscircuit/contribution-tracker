const REPO_OWNER = "tscircuit"
const REPO_NAME = "contribution-tracker"

const REPO_BASE_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`
const RAW_CONTENT_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main`
const CONTRIBUTION_OVERVIEWS_PATH = "contribution-overviews"

// Use local data in development
const isDev = import.meta.env.DEV
const LOCAL_BASE_URL = "http://localhost:5173"

export const getContributionOverviewsUrl = () =>
  isDev
    ? `${LOCAL_BASE_URL}/api/repos/tscircuit/contribution-tracker/contents/contribution-overviews`
    : `${REPO_BASE_URL}/contents/${CONTRIBUTION_OVERVIEWS_PATH}?per_page=100`

export const getContributionOverviewMarkdownUrl = (date: string) =>
  isDev
    ? `${LOCAL_BASE_URL}/local-data/${CONTRIBUTION_OVERVIEWS_PATH}/${date}.md`
    : `${RAW_CONTENT_URL}/${CONTRIBUTION_OVERVIEWS_PATH}/${date}.md`

export const getPrAnalysisUrl = (date: string) =>
  isDev
    ? `${LOCAL_BASE_URL}/local-pr-analysis/${date}.json`
    : `${RAW_CONTENT_URL}/pr-analysis/${date}.json`

export const getPullRequestUrl = (repo: string, prNumber: number) =>
  `https://github.com/${repo}/pull/${prNumber}`
