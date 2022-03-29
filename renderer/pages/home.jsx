import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Alert, AlertIcon } from '@chakra-ui/react'
function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-javascript) ⚡</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page now</a>
          </Link>
        </p>
        <p>thierry</p>
        <img src="/images/logo.png" />
      </div>
      <Alert status="success">
        <AlertIcon />
        Data uploaded to the server. Fire on! hhh
      </Alert>
    </>
  )
}

export default Home
