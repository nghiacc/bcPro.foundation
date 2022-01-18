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
        
        <h3 className='h3'>bcPro Tokenomics</h3>

        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSTCLb9cjqnl_V0u71h2XFWDSG75aQ9sWg_QXhhp0BZDi3AhTK12wF2lX10BITGFfzxqQyRFgvLdeXp/embed?start=true&loop=true&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      
      </main>

      <Footer />
    </div>
  )
}
