import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'
import App from './App.jsx'
import './index.css'

/* 
  connect users wallet to a dapp on assetchain, through wallet-connect.
  - user clicks connect wallet.
  - shows them qr code to scan with phone.
  - user scans with phone wallet, and connects to this app(running on a-chain)
 */

const core = new Core({
  projectId: process.env.PROJECT_ID
})

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: 'Demo app',
    description: 'Demo Client as Wallet/Peer',
    url: 'www.walletconnect.com',
    icons: []
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
