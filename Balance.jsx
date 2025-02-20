import{useConnection, useWallet} from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function ShowBalance(){
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHtml = balance/LAMPORTS_PER_SOL;

        }
    }
    getBalance();
    return(
        <div>
        <p> YOUR SOLANA BALANCE IS :</p>
         <div id = "balance"></div>     
        </div>
    )
}