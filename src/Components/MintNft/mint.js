import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import MyNft from '../../utils/MyNFT.json'
import NFTTrade from '../../utils/NFTTrade.json'
import { nftaddress, nftmarketaddress } from '../../utils/config'
import './mintstyle.css'
import { create } from 'ipfs-http-client'
import useGetConnection from '../../CustomHooks/getConnection'
const client = create('https://ipfs.infura.io:5001/api/v0')
function MintNft () {
  const connection = useGetConnection()
  const [formInput, updateFormInput] = useState({
    price: 0,
    name: '',
    description: ''
  })
  const [error, setError] = useState('')
  const [allData, setAll] = useState('')
  const [address, setAddress] = useState('')
  const [nftPrice, setNftPrice] = useState(0.02)
  const [fileUrl, updateFileUrl] = useState(``)
  useEffect(() => {
    console.log(
      connection.then(res => {
        console.log(res)
        setAddress(res)
      })
    )
  }, [])
  const ChangeHandler = e => {
    e.preventDefault()
    setNftPrice(e.target.value)
  }
  async function onChange (e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
      //  createMarket()
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  async function createMarket () {
    const { name, description, price } = formInput
    // if (!name || !description || !price || !fileUrl) return
    // /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setAll(url)
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  console.log(allData)
  const ClickMint = async e => {
    e.preventDefault()
    createMarket()
    if (fileUrl != undefined) {
      console.log(fileUrl)
      console.log(formInput.price)
      console.log(formInput.description)

      setError('')
    } else {
      setError('Some Values Missing')
    }
  }
  return (
    <div className='mint-contain d-flex justify-content-center'>
      <div className='p-2'>
        <h3>Mint Your Nft</h3>

        <form className=' p-4 '>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Upload Nft</label>
            <input
              type='file'
              class='form-control'
              onChange={onChange}
              placeholder='upload'
            />
            {/* <small id='emailHelp' class='form-text text-muted'>
              hosted nft :
              <a href={fileUrl} target='_blank'>
                {' '}
                {fileUrl}
              </a>
            </small> */}
            {fileUrl != '' ? (
              <img className="img-contain mt-2" src={fileUrl} width='100' height='100'></img>
            ) : (
              <></>
            )}
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Name</label>
            <input
              type='text'
              onChange={e =>
                updateFormInput({ ...formInput, name: e.target.value })
              }
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Name of Nft'
            />
          </div>

          <div class='form-group'>
            <label for='exampleInputPassword1'>Price</label>
            <input
              type='number'
              onChange={e =>
                updateFormInput({ ...formInput, price: e.target.value })
              }
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Price'
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Description</label>
            <input
              type='text'
              onChange={e =>
                updateFormInput({ ...formInput, description: e.target.value })
              }
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Description'
            />
          </div>
          {/* {error != '' ? (
            <div>
              <p class="text-danger text-center
              p-4">Some Fields  are mssing</p>
            </div>
          ) : (
            <></>
          )} */}
          <button
            className='mint-btn w-100 text-center mt-4'
            onClick={ClickMint}
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default MintNft
