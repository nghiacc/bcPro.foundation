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

        <table width={350}>
          <tr>
            <td colSpan={2} align='center'>
              <h3 className='description'>Token Information</h3>
            </td>
          </tr>
          <tr>
            <td align='center'>
              <a target="_blank" title="bcPro Token" rel="noopener noreferrer"  href="https://explorer.be.cash/tx/5a68fe2909240832f5e3de0d57cb8d622934f47ee7ab7b2ba49d5295a581ca13"><img src="/bcpro-logo.png" width={64} height={64}></img></a>
            </td>
            <td align='center'>
              <a target="_blank" title="EAT Token" rel="noopener noreferrer"  href="https://explorer.be.cash/tx/0c8d48bb808cf84705cd4c7cf27807d439a5dd032f662116966263226424805a"><img src="/eat-icon.png" width={64} height={64}></img></a>
            </td>
          </tr>
          <tr>
            <td align='center'>
                bcPro Token
            </td>
            <td align='center'>
                EAT Token
            </td>
          </tr>
          <tr>
            <td align='center'>
                Backed by crypto assets
            </td>
            <td align='center'>
                1 EAT = 1 USDT
            </td>
          </tr>
          <tr>
            <td align='center'>
                Weekly Lotus dividend payout on Saturdays.
            </td>
            <td align='center'>
                Weekly Lotus interest payout on Saturdays.
            </td>
          </tr>
        </table>
        <table width={350}>
          <tr>
            <td colSpan={2} align='center'>
              <h3 className='description'>bcPro Assets</h3>
            </td>
          </tr>
          <tr>
            <td align='center'>
              <a target="_blank" title="eCash (XEC)" rel="noopener noreferrer"  href="https://explorer.be.cash/address/ecash:pz8yp6cjgp7wm2dpfzl6d2xaux0nlps4auzamkqtr4"><img src="/ecash.png" width={64} height={64}></img></a>
            </td>
            <td align='center'>
              <a target="_blank" title="Lotus (XPI)" rel="noopener noreferrer"  href="https://explorer.givelotus.org/address/lotus_1PrRica6SAT3VmGK31qHMcfso2a12v5PB31iiT"><img src="/lotus_96x96.png" width={64} height={64}></img></a>
            </td>
          </tr>
          <tr>
            <td align='center'>
                eCash (XEC)
            </td>
            <td align='center'>
                Lotus (XPI)
            </td>
          </tr>
        </table>
        <p>&nbsp;
        </p>  
        
        
        <p>
          More info: Check out <a target="_blank" title="bcPro Token" rel="noopener noreferrer" href='https://docs.google.com/presentation/d/e/2PACX-1vSTCLb9cjqnl_V0u71h2XFWDSG75aQ9sWg_QXhhp0BZDi3AhTK12wF2lX10BITGFfzxqQyRFgvLdeXp/pub?start=false&loop=false&delayms=3000'>bcPro Tokenomics</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
