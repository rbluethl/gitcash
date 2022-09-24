import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Handle POST requests to the Gumroad API endpoint

    // Extract secret from query string
    const secret = req.query.secret as string
    if (secret !== process.env.API_SECRET) {
      // Compare secret to prevent unauthorized access
      // This is to make sure that the request is coming from Gumroad
      // and not from somewhere else
      return res.status(401).end()
    }

    // Extract Gumroad payload from request body
    // Make sure the `GitHub username` field is present in the payload
    const usernameField = process.env.GUMROAD_GITHUB_USERNAME_FIELD!

    const body = req.body
    const username = body[usernameField]
    if (!username) {
      // If the `GitHub username` field is not present, return an error
      return res.status(400).json({
        message: `Missing field [${usernameField}] in your Gumroad product`
      })
    }

    // Create a new GitHub client
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })

    try {
      // Add collaborator with the passed username to the repository
      await octokit.rest.repos.addCollaborator({
        owner: process.env.GITHUB_OWNER!,
        repo: process.env.GITHUB_REPO!,
        username,
        // Permission is only valid on organization-owned repositories
        // Members to user-owned repositories are always given push access
        permission: process.env.GITHUB_PERMISSION ?? 'pull'
      })
      return res.status(200).end()
    } catch (error) {
      console.error(error)
      return res
        .status(500)
        .json({ message: `Failed to add collaborator ${username}` })
    }
  }

  return res.status(405).end()
}
