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
        <img src="/bcPro-Logo.png" height={256} width={256}></img>
        <Header title="bcPro Tokenomics" />
        
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSTCLb9cjqnl_V0u71h2XFWDSG75aQ9sWg_QXhhp0BZDi3AhTK12wF2lX10BITGFfzxqQyRFgvLdeXp/embed?start=true&loop=true&delayms=5000" frameborder="0" width="100%" height="575" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      
        <h3 className='description'>Token Informations</h3>
        <table width={200}>
          <tr>
            <td align='center'>
              <a target="_blank" title="bcPro Token" rel="noopener noreferrer"  href="https://explorer.be.cash/tx/5a68fe2909240832f5e3de0d57cb8d622934f47ee7ab7b2ba49d5295a581ca13"><img src="/bcpro-icon.png" width={64} height={64}></img></a>
            </td>
            <td align='center'>
              <a target="_blank" title="EAT Token" rel="noopener noreferrer"  href="https://explorer.be.cash/tx/0c8d48bb808cf84705cd4c7cf27807d439a5dd032f662116966263226424805a"><img src="/eat-icon.png" width={64} height={64}></img></a>
            </td>
          </tr>
          <tr>
            <td align='center'>
                #Hold2Earn
            </td>
            <td align='center'>
                #Saving4Lotus
            </td>
          </tr>
        </table>
        <p className='description'>
          Weekly Dividend and Interest for #Hold2Earn and #Saving4Lotus programs.
        </p>
        <p>
          More info: Check out <a target="_blank" title="bcPro Token" rel="noopener noreferrer" href='https://t.me/bcprotx'>bcPro Telegram channel</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
