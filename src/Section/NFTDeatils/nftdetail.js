import React from 'react'
import "./nftdetail.css"
import {SiEthereum} from "react-icons/si"
import { useCookies } from "react-cookie"
import BuyNft from '../../Components/BuyNftBtn/buynft'
function NFTDetail() {
    console.log("asdasd")
    const [cookies, setCookies, removeCookie] = useCookies(['nft'])
    console.log(cookies.nft)
    // const BuyNft=()=>{
        
    // }
    const GoBack = () => {
    }

    return (
        <div className="info d-flex">
            
            <div className="left-contain w-50">
                <img src={cookies.nft.img}></img>
            </div>
            <div className="right-contain w-50">
                <div className='content-wrap '>
                    <h2 className='title'>NFT Name</h2>
                    <h5 className='sub-title'>Creator</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div><h4>Price</h4></div>
                    <div><h4><span><SiEthereum></SiEthereum></span>{cookies.nft.price}</h4></div>
                    <div><BuyNft/></div>
                    
                    <div className='mt-4'><h6>Contract Address</h6></div>
                    <div ><a href="https://etherscan.io/tx/0x13b80e301af79a7c9b05b3232e6456a0d40130a1d5e2dc7223c9f5cf66f1b5a4">0xDD4e4388c4C8DF07Bac11bCFD1657F5678dDcC0B </a></div>
                </div>
            </div>
        </div>
    )
}

export default NFTDetail
