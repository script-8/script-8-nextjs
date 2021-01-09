import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SCRIPT-8 v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>SCRIPT-8 v2</h1>

        <p>
          This is the SCRIPT-8 rewrite. Follow along at{' '}
          <a href="https://github.com/script-8/script-8-nextjs">
            script-8-nextjs
          </a>
          .
        </p>
      </main>
    </div>
  )
}
