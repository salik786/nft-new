import React, { useState } from 'react'
import { ethers } from 'ethers'
import './buynft.css'
import MyNft  from "../../utils/MyNFT.json"
import NFTTrade from "../../utils/NFTTrade.json"
import {nftaddress,nftmarketaddress} from "../../utils/config"
import { useCookies } from 'react-cookie'
const BuyNft = () => {
  const [cookies, setCookies] = useCookies(['nft'])
  const [error, setError] = useState('')
  const [receAdd, setRecAdd] = useState('')
  const [etherAmou, setEtherAmou] = useState(0)
    const ChangeHandler=(e)=>{
        e.preventDefault();
        setEtherAmou(e.target.value);
    }
  const PayEth = async e => {
    e.preventDefault()
   
    // console.log(cookies.nft.price)
  
  }
  const HandleReceChange = e => {
    setRecAdd(e.target.value)
  }
  const HandleAmouChange = e => {
    setEtherAmou(e.target.value)
  }
  return (
    <div>
      <button
        type='button'
        class='btn btn-primary btn-lg'
        data-bs-toggle='modal'
        data-bs-target='.bd-example-modal-lg'
      >
        Buy Now
      </button>
      <div
        class='modal bd-example-modal-lg'
        tabindex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-lg'>
          <div class='modal-content text-center h-100'>
          <h3 className='bg-primary text-light p-4'>BUY FAVOURITE NFT</h3>
            <div className='p-2  d-flex justify-content-center'>
              
              <form className='w-50'>
              
                <div class='form-group pb-4 pt-4'>
                  <label for='exampleInputEmail1'>NFT NAME</label>
                  <input
                    type='text'
                    class='form-control'
                
                    placeholder='name'
                  />
               
                </div>
                <div class='form-group '>
                  <label for='exampleInputPassword1'>Offer Price</label>
                  <input
                    type='number'
                    class='form-control'
                    value={etherAmou}
                    onChange={ChangeHandler}
                    placeholder='enter offer price'
                  />
                </div>
                <div class='form-group form-check text-danger'>
                    {error}
                </div>
                <button onClick={PayEth} class='btn btn-primary'>
                  Buy NFT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNft
