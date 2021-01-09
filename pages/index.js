import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [code, setCode] = useState('')

  const onTextAreaChange = event => {
    setCode(event.target.value)
  }

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
        <h2>Input</h2>
        <textarea value={code} onChange={onTextAreaChange}></textarea>
        <h3>Output</h3>
        <div>{code}</div>
      </main>
    </div>
  )
}
