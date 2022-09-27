# GitCash

![GitCash image](/public/og_image.png)

Sell access to your [GitHub](https://github.com) repos using [Gumroad](https://gumroad.com).

## Documentation

[Visit the GitCash documentation](https://devotedhq.notion.site/GitCash-8b521adfb597419f8c936f645ae468c9) for detailed documentation on how to set up your own repo.

## Environment Variables

If you want to use GitCash for multiple Gumroad products, prefix your environment variable names with the uppercase product ID. For example, if you have a product with the ID `swalf`, you would use `SWALF_GITHUB_OWNER` instead of `GITHUB_OWNER`. If you want to use the same value for all products, you can use the unprefixed variable name. All variables except API_SECRET can be prefixed to use for multiple products.

| Name                            | Description                                                                                                                                                                             | Example Value      |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `API_SECRET`                    | Secret to use for verifiying API calls come from Gumroad                                                                                                                                | `b3j3K6s92FNRE8MD` |
| `GUMROAD_GITHUB_USERNAME_FIELD` | Name of the GitHub username field in your Gumroad product                                                                                                                               | `GitHub username`  |
| `GITHUB_TOKEN`                  | Personal access token to interact with the GitHub API. Required scope is repo.                                                                                                          | `ghp_xxxx`         |
| `GITHUB_OWNER`                  | Owner (organization or username) of the GitHub repository to grant your customers access to.                                                                                            | `gitcashhq`        |
| `GITHUB_REPO`                   | Name of the GitHub repository to grant your customers access to.                                                                                                                        | `gitcash`          |
| `GITHUB_PERMISSION`             | Permission to give your customers to when added to your repository. Only valid (and required) on organization-owned repositories, user-owned repositories are always given push access. | `pull`             |

## One-click deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frbluethl%2Fgitcash&env=API_SECRET,GUMROAD_GITHUB_USERNAME_FIELD,GITHUB_TOKEN,GITHUB_OWNER,GITHUB_REPO)
