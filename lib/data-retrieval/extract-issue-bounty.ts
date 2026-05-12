interface BountySource {
  body?: string | null
  labels?: Array<string | { name?: string | null }>
}

interface IssueComment {
  body?: string | null
  user?: {
    login?: string | null
  } | null
}

function formatUsd(amount: string) {
  const normalized = amount.replace(/,/g, "")
  const numeric = Number(normalized)

  if (!Number.isFinite(numeric)) {
    return `$${amount}`
  }

  return `$${Number.isInteger(numeric) ? numeric : numeric.toFixed(2)}`
}

function getLabelName(label: string | { name?: string | null }) {
  return typeof label === "string" ? label : label.name || ""
}

export function extractIssueBounty(
  issue: BountySource,
  comments: IssueComment[] = [],
) {
  const bodyBounty = issue.body?.match(
    /(?:^|\n)\s*\/bounty\s+\$?\s*([0-9][0-9,]*(?:\.[0-9]{1,2})?)\s*(?:\$|usd)?\b/i,
  )
  if (bodyBounty?.[1]) {
    return formatUsd(bodyBounty[1])
  }

  for (const comment of comments) {
    const commentAuthor = comment.user?.login
    if (commentAuthor !== "algora-pbc" && commentAuthor !== "algora-pbc[bot]") {
      continue
    }

    const algoraBounty = comment.body?.match(
      /##\s*.*?\$?([0-9][0-9,]*(?:\.[0-9]{1,2})?)\s+bounty/i,
    )
    if (algoraBounty?.[1]) {
      return formatUsd(algoraBounty[1])
    }
  }

  for (const label of issue.labels || []) {
    const labelBounty = getLabelName(label).match(
      /^\$([0-9][0-9,]*(?:\.[0-9]{1,2})?)$/,
    )
    if (labelBounty?.[1]) {
      return formatUsd(labelBounty[1])
    }
  }

  return null
}
