import React,{useEffect,useState} from 'react'
import { ethers } from 'ethers'
import MyNft  from "../../utils/MyNFT.json"
import NFTTrade from "../../utils/NFTTrade.json"
import {nftaddress,nftmarketaddress} from "../../utils/config"

function Test_market() {
const [nft,setNfts]=useState([]);
  useEffect(() => {
        
    }, [])
 const ClickMarket=async()=>{
  
    // setLoadingState('loaded') 
 }

 const CreateClick=async()=>{
   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    
    console.log("Account:", await signer.getAddress());
    const tokenContract=new ethers.Contract(nftaddress,MyNft.abi,signer)
    let transaction=await tokenContract.createToken("https://gateway.pinata.cloud/ipfs/QmdCfj3fiE1LqV5Q6TxDFyGWkVd6BNCrYsW27LE1tcLjqB")
    // const data=await marketContract.fetchMarketItems();
    let tx=await transaction.wait()

    let event=tx.events[0];
    let value=event.args[2];
    let tokenId=value.toNumber();
    const price=ethers.utils.parseUnits("0.01",'ether')

    let contract=new ethers.Contract(nftmarketaddress,NFTTrade.abi,signer)
 
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    
 }
 async function buyNft(nft) {
   /* needs the user to sign the transaction, so will use Web3Provider and sign it */
   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
   const contract = new ethers.Contract(nftmarketaddress, NFTTrade.abi, signer)
   const price = ethers.utils.formatUnits("25000000000", 'wei')
   console.log(price);
   const transaction = await contract.createMarketSale(nftaddress, 2, {
     value: price
   })
   await transaction.wait()
   
 }
 console.log(nft);
    return (
        <div>
        <button onClick={ClickMarket}>Show Market</button>
        
        <button onClick={CreateClick}>CreateSale</button>
        <button onClick={buyNft}>Buy Nft</button>
  
        </div>
  )
}

export default Test_market
