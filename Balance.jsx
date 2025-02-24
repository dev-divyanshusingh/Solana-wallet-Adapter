import{useConnection, useWallet} from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import{useEffect, useState} from "react";


export function ShowBalance(){
    const {connection} = useConnection();
    const wallet = useWallet();
    const[balance, setBalance] = useState(null);

    useEffect(() => {
        async function getBalance(){
            if (wallet.connected && wallet.publicKey){
                try{
                    const balance = await connection.getBalance(wallet.publicKey);
                    setBalance(balance / LAMPORTS_PER_SOL);
                } catch (error){
                    console.error("Error fetching the balance ", error);
                }
            }
        }
        getBalance();   
    },[wallet.connected, wallet.publicKey, connection]);
    
    return(
        <div>
        <p> YOUR SOLANA BALANCE IS :</p>
         <div> {balance !== null ? balance.toFixed(4) + "SOL " : " Loading ...." }</div>     
        </div>
    )
}