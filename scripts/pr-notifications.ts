import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import { getMergedPRs } from "lib/data-retrieval/getMergedPRs"
import { getOpenedPRs } from "lib/data-retrieval/getOpenedPRs"
import { getRepos } from "lib/data-retrieval/getRepos"
import {
  notifyPRChange,
  notifyFirstTimeContributor,
  isFirstTimeContributor,
  postMergeComment,
} from "lib/notifications/notify-pr-change"
import { EXCLUDED_BOTS } from "lib/constants"
import type { AnalyzedPR } from "lib/types"

function getUTCDateTime(): string {
  return new Date().toISOString()
}

async function main() {
  const oneHourAgo = new Date(Date.now() - 3600000)

  console.log(`[${getUTCDateTime()}] Starting PR notification process`)
  const repositories = await getRepos()
  console.log(
    `[${getUTCDateTime()}] Found ${repositories.length} repositories to analyze`,
  )
  const analyzedPullRequests: AnalyzedPR[] = []

  for (const repository of repositories) {
    console.log(`[${getUTCDateTime()}] Processing repository: ${repository}`)
    const recentlyMergedPRs = await getMergedPRs(
      repository,
      oneHourAgo.toISOString(),
    )
    console.log(
      `[${getUTCDateTime()}] Found ${recentlyMergedPRs.length} merged PRs in ${repository}`,
    )

    const activePullRequests = (
      await getOpenedPRs(repository, oneHourAgo.toISOString())
    ).filter((pullRequest) => !pullRequest.merged_at)
    console.log(
      `[${getUTCDateTime()}] Found ${activePullRequests.length} opened PRs in ${repository}`,
    )

    for (const pullRequest of [...recentlyMergedPRs, ...activePullRequests]) {
      const contributor = pullRequest.user?.login
      if (
        contributor &&
        (EXCLUDED_BOTS.includes(
          contributor as (typeof EXCLUDED_BOTS)[number],
        ) ||
          contributor.includes("[bot]"))
      ) {
        console.log(
          `[${getUTCDateTime()}] Skipping PR #${pullRequest.number} from ${pullRequest.user.login} in ${repository}`,
        )
        continue
      }

      console.log(
        `[${getUTCDateTime()}] Analyzing PR #${pullRequest.number} in ${repository}`,
      )
      const prAnalysis = await analyzePRWithAI(pullRequest, repository)
      analyzedPullRequests.push(prAnalysis)

      if (contributor && pullRequest.merged_at) {
        console.log(
          `[${getUTCDateTime()}] Checking if ${contributor} is a first-time contributor`,
        )
        const isFirstTime = await isFirstTimeContributor(contributor)

        if (isFirstTime) {
          console.log(
            `[${getUTCDateTime()}] 🎉 ${contributor} is a first-time contributor! Sending celebration`,
          )
          await notifyFirstTimeContributor(prAnalysis)
        } else {
          console.log(
            `[${getUTCDateTime()}] ${contributor} has contributed before`,
          )
        }
      }

      await postMergeComment(prAnalysis)
      await notifyPRChange(prAnalysis)
      console.log(
        `[${getUTCDateTime()}] Completed analysis and notification for PR #${pullRequest.number}`,
      )
    }
  }

  console.log(
    `[${getUTCDateTime()}] Completed PR notification process. Total PRs processed: ${analyzedPullRequests.length}`,
  )
}

// Run the script
main().catch((error) => {
  console.error(
    `[${getUTCDateTime()}] Error in PR notification process:`,
    error,
  )
  process.exit(1)
})
