import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>bcPro Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to bcPro Foundation!" />
        
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSTCLb9cjqnl_V0u71h2XFWDSG75aQ9sWg_QXhhp0BZDi3AhTK12wF2lX10BITGFfzxqQyRFgvLdeXp/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      
      </main>

      <Footer />
    </div>
  )
}
