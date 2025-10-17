import { graphql } from "@octokit/graphql"
import type { DiscussionComment } from "lib/types"

/**
 * Fetches discussion comments for a specific user in a repository since a given date
 */
export async function getAllDiscussionComments(
  startDate: string,
  repo: string = "tscircuit/tscircuit",
): Promise<DiscussionComment[]> {
  try {
    const [owner, repoName] = repo.split("/")

    // Use TSCIRCUIT_BOT_TOKEN if available for org-wide access, fallback to GITHUB_TOKEN
    const githubToken = process.env.TSCIRCUIT_BOT_TOKEN || process.env.GITHUB_TOKEN
    // Create a GraphQL client with authentication
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${githubToken}`,
      },
    })

    // Format date for GraphQL query
    const formattedDate = new Date(startDate).toISOString()

    // Fetch organization discussion comments
    const query = `
  query GetOrgDiscussionComments($owner: String!, $repo: String!) {
    organization(login: $owner) {
      repository(name: $repo) {
        discussions(first: 100) {
          nodes {
            title
            url
            number
            author {
              login
            }
            bodyText
            createdAt
            comments(first: 100) {
              nodes {
                author {
                  login
                }
                bodyText
                createdAt
                url
                isAnswer
              }
            }
          }
        }
      }
    }
  }
`

    // Execute the GraphQL query
    const result: any = await graphqlWithAuth(query, {
      owner,
      repo: repoName,
    })

    // Process and filter the results
    const discussionComments: DiscussionComment[] = []

    if (result.organization?.repository?.discussions?.nodes) {
      for (const discussion of result.organization?.repository.discussions
        .nodes) {
        if (discussion.comments?.nodes) {
          discussionComments.push({
            discussionTitle: discussion.title,
            discussionNumber: discussion.number,
            discussionUrl: discussion.url,
            discussionAuthor: discussion.author?.login,
            body: discussion.bodyText,
            url: discussion.url,
            createdAt: discussion.createdAt,
          })
          for (const comment of discussion.comments.nodes) {
            // Only include comments by the specified user and after the start date
            if (
              new Date(comment.createdAt).getTime() >=
              new Date(formattedDate).getTime()
            ) {
              discussionComments.push({
                discussionTitle: discussion.title,
                discussionNumber: discussion.number,
                discussionUrl: discussion.url,
                body: comment.bodyText,
                url: comment.url,
                discussionAuthor: comment.author.login,
                createdAt: comment.createdAt,
              })
            }
          }
        }
      }
    }
    return discussionComments.filter(
      (comment) =>
        new Date(comment.createdAt).getTime() >=
        new Date(formattedDate).getTime(),
    )
  } catch (error) {
    console.error(`Error fetching discussion comments: ${error}`)
    return []
  }
}
