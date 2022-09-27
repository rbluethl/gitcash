import Link from 'next/link'

const Index = () => (
  <main className="flex h-screen w-full flex-col items-center justify-center space-y-8">
    <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
      GitCash 🤑
    </h1>

    <Link
      href={`https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frbluethl%2Fgitcash&env=API_SECRET,GUMROAD_GITHUB_USERNAME_FIELD,GITHUB_TOKEN,GITHUB_OWNER,GITHUB_REPO`}
      className="max-w-sm"
    >
      <button className="relative inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-12 py-1.5 font-medium text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 enabled:hover:bg-sky-700 disabled:cursor-not-allowed  disabled:opacity-50 dark:ring-offset-neutral-900 sm:text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="ml-1">Deploy to Vercel</span>
      </button>
    </Link>
  </main>
)

export default Index
