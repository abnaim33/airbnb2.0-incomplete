import Head from 'next/head'

import { Nunito } from 'next/font/google'
const font = Nunito({
  subsets: ["latin"]
})


export default function Home() {

  // hidration error client only component use kormu
  return (
    <div className={font.className}>
      <Head>
        <title>Airbnb2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



    </div>
  )
}
