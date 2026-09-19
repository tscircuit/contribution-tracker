export interface ReviewReactionNode {
  id: string
  reactions: { totalCount: number }
}

export const REVIEW_DOWNVOTES_QUERY = `
  query ReviewDownvotes($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on PullRequestReview {
        id
        reactions(content: THUMBS_DOWN) { totalCount }
      }
    }
  }
`

/** REST reviews omit body reactions. Fetch the same review nodes via GraphQL. */
export async function getReviewDownvotes(
  ids: string[],
  fetchNodes: (ids: string[]) => Promise<(ReviewReactionNode | null)[]>,
): Promise<Set<string>> {
  const downvoted = new Set<string>()
  const uniqueIds = [...new Set(ids)]
  for (let offset = 0; offset < uniqueIds.length; offset += 100) {
    const batch = uniqueIds.slice(offset, offset + 100)
    const nodes = await fetchNodes(batch)
    const byId = new Map(
      nodes.filter((node) => node !== null).map((node) => [node.id, node]),
    )
    for (const id of batch) {
      const count = byId.get(id)?.reactions?.totalCount
      if (count === undefined || !Number.isInteger(count) || count < 0) {
        throw new Error(`Missing review reaction data for ${id}`)
      }
      if (count > 0) downvoted.add(id)
    }
  }
  return downvoted
}
