import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'

const retrieveValue = (product: string, key: string) =>
  process.env[`${product}_${key}`] ?? process.env[key]!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Handle POST requests to the Gumroad API endpoint
    // Extract Gumroad payload from request body
    const body = req.body

    // Retrieve short product ID from Gumroad
    const productId = body.short_product_id

    // Extract secret from query string
    const secret = req.query.secret as string
    if (secret !== process.env.API_SECRET) {
      // Compare secret to prevent unauthorized access
      // This is to make sure that the request is coming from Gumroad
      // and not from somewhere else
      return res.status(401).end()
    }

    // Extract and validate environment variables
    const usernameField = retrieveValue(
      productId,
      'GUMROAD_GITHUB_USERNAME_FIELD'
    )
    const token = retrieveValue(productId, 'GITHUB_TOKEN')
    const owner = retrieveValue(productId, 'GITHUB_OWNER')
    const repo = retrieveValue(productId, 'GITHUB_REPO')
    const permission = retrieveValue(productId, 'GITHUB_PERMISSION') ?? 'pull'

    // Make sure the `GitHub username` field is present in the payload
    const username = body[usernameField]
    if (!username) {
      // If the `GitHub username` field is not present, return an error
      return res.status(400).json({
        error: `Missing field [${usernameField}] in your Gumroad product`
      })
    }

    // Create a new GitHub client
    const octokit = new Octokit({
      auth: token
    })

    try {
      // Add collaborator with the passed username to the repository
      await octokit.rest.repos.addCollaborator({
        owner,
        repo,
        username,
        // Permission is only valid on organization-owned repositories
        // Members to user-owned repositories are always given push access
        permission
      })
      return res.status(200).end()
    } catch (error) {
      console.error(error)
      return res
        .status(500)
        .json({ error: `Failed to add collaborator ${username}` })
    }
  }

  return res.status(405).end()
}
