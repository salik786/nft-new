import Web3 from "web3"
import ContractBuild from "./MyNFT.json"
async function initWeb3() {

    let provider = window.ethereum;

    provider.request({ method: 'eth_requestAccounts' })
        .then((accounts => {
            let selectedAccount = accounts[0];
            // console.log(selectedAccount);
        })).catch((err) => {
            console.log(err);
        })

    window.ethereum.on('accountsChanged', (accounts) => {
        let selectedAccount = accounts[0];
        // console.log(selectedAccount)
    })

    const web3 = new Web3(provider);
//    console.log(ContractBuild)
    if (provider != undefined) {    
        let contract = new web3.eth.Contract(ContractBuild.abi, "0xD82d65F433253634A7b570B829E1F354F770D768")
        let a = contract.methods.getOwner(1);
        console.log('owner address is ', a);
    }
}
export default initWeb3;