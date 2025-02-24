import './App.css';
import { RequestAirdrop } from '../Airdrop';
import { ShowBalance } from '../Balance';
import { SendTokens } from '../Transfer';
import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from '@solana/web3.js';
import "@solana/wallet-adapter-react-ui/styles.css";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

function App() {
 const network = WalletAdapterNetwork.Devnet;
 const endpoint = useMemo(() => clusterApiUrl(network), [network]);
 const wallets= useMemo(()=> [new PhantomWalletAdapter()], []);
 
  return (
    <ConnectionProvider endpoint= "https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton/>
          <WalletDisconnectButton/>
            <RequestAirdrop/>{/*for app component  */}
            <ShowBalance/>
            <SendTokens/>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App
