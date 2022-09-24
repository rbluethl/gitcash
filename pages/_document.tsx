import { Head, Html, Main, NextScript } from 'next/document'

const Home = () => 
    <Html lang="en" className="antialiased">
      <Head>
        <meta property="og:url" content="https://gitcash.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="gitcash.dev - Sell access to your GitHub repositories"
        />
        <meta
          property="og:image"
          content="https://gitcash.dev/og_image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gitcash.dev" />
        <meta property="twitter:url" content="https://gitcash.dev/" />
        <meta
          name="twitter:image"
          content="https://gitcash.dev/og_image.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <body className="bg-white text-gray-900 transition duration-150 ease-in-out dark:bg-neutral-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>

export default Home
