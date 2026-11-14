export interface ReviewDownvotesResponse {
  repository: {
    pullRequest: {
      reviews: {
        nodes: Array<{
          databaseId: number | null
          reactions: { totalCount: number }
        } | null>
        pageInfo: { hasNextPage: boolean; endCursor: string | null }
      }
    } | null
  } | null
}

// REST's listReviews response does not include reactions on review bodies.
export const REVIEW_DOWNVOTES_QUERY = `
  query ReviewDownvotes($owner: String!, $repo: String!, $pullNumber: Int!, $cursor: String) {
    repository(owner: $owner, name: $repo) {
      pullRequest(number: $pullNumber) {
        reviews(first: 100, after: $cursor) {
          nodes {
            databaseId
            reactions(content: THUMBS_DOWN) { totalCount }
          }
          pageInfo { hasNextPage endCursor }
        }
      }
    }
  }
`

export async function fetchDownvotedReviewIds({
  fetchPage,
}: {
  fetchPage: (cursor: string | null) => Promise<ReviewDownvotesResponse>
}): Promise<Set<number>> {
  const downvotedReviewIds = new Set<number>()
  let cursor: string | null = null

  do {
    const response = await fetchPage(cursor)
    const reviews = response.repository?.pullRequest?.reviews
    if (!reviews) {
      throw new Error("Cannot retrieve pull request review reactions")
    }

    for (const review of reviews.nodes) {
      if (review?.databaseId != null && review.reactions.totalCount > 0) {
        downvotedReviewIds.add(review.databaseId)
      }
    }

    if (!reviews.pageInfo.hasNextPage) break
    if (!reviews.pageInfo.endCursor || reviews.pageInfo.endCursor === cursor) {
      throw new Error("Missing next cursor for pull request review reactions")
    }
    cursor = reviews.pageInfo.endCursor
  } while (true)

  return downvotedReviewIds
}
