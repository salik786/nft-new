import React, { useState, useEffect } from 'react'
import {RiWallet3Line} from "react-icons/ri"
// import initWeb3 from '../../utils/web3Connection'
import Web3 from "web3"
import ContractBuild from "../../utils/MyNFT.json"   
function Wallet() {
    const [accAdd, setAccAdd] = useState([])
    //check wheter wallet is connected on not and attach wallet with application 

    const ConnectWallet = async () => {
        let provider = window.ethereum;

        provider.request({ method: 'eth_requestAccounts' })
            .then((accounts => {
                let selectedAccount = accounts[0];
                setAccAdd(selectedAccount);
                // console.log(selectedAccount);
            })).catch((err) => {
                console.log(err);
            })
    
        window.ethereum.on('accountsChanged', (accounts) => {
            let selectedAccount = accounts[0];
            setAccAdd(selectedAccount)
            // console.log(selectedAccount)
        })
    
        const web3 = new Web3(provider);
    //    console.log(ContractBuild)
        if (provider != undefined) {    
            // let contract = new web3.eth.Contract(ContractBuild.abi, "0xD82d65F433253634A7b570B829E1F354F770D768")
            // let a = contract.methods.getOwner(1);
            // let b = contract.methods.getNftAmou("0xDD4e4388c4C8DF07Bac11bCFD1657F5678dDcC0B");
            // console.log('owner address is ', a);
            // console.log('nft amou', b);
        }
    
    }
    const DisconnectWallet=async()=>{
        const walletAddress = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [
              {
                eth_accounts: {}
              }
            ]
          });
          
          setAccAdd([]);
    }
    useEffect(async () => {

    }, [accAdd])
    return (

        <div>
            { accAdd.length>0
                ?
                <>
                    <div class="dropdown">
                        <button class="btn btn-warning dropdown-toggle overflow-hidden" data-bs-toggle="dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <RiWallet3Line/> {accAdd}
                        </button>
                        <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item w-100" href="#">Wallet Details</a>
                            <a class="dropdown-item" href="#" onClick={DisconnectWallet}>Disconnect</a>
                            <a class="dropdown-item" href="#">User DashBoard</a>
                        </div>
                    </div>
                </>
                : <button className="wallet-btn btn-danger w-100" onClick={ConnectWallet}>Connect Your Wallet</button>
            }
        </div>
    )
}

export default Wallet
