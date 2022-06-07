// import Pagination from "../../Components/Pagination/pagination";

import Card from '../../Components/Card/Cards/card'
import data from '../../utils/nft'
import { useCookies } from 'react-cookie'
import { ethers } from 'ethers'
import MyNft from '../../utils/MyNFT.json'
import NFTTrade from '../../utils/NFTTrade.json'
import { nftaddress, nftmarketaddress } from '../../utils/config'

import { useEffect, useState } from 'react'
import NFTDetail from '../NFTDeatils/nftdetail'
import './nftshow.css'
import axios from 'axios'
// import NFTDetail from "../../Pages/NFTDeatils/nftdetail"

const NFTShow = () => {
  const [nft, setNfts] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['nft'])
  const [showDetail, setShowDetail] = useState(false)
  const [loading, setLoading] = useState('loading')

  const ClickMarket = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    // Prompt user for account connections
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    console.log('Account:', await signer.getAddress())
    const tokenContract = new ethers.Contract(nftaddress, MyNft.abi, signer)
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      NFTTrade.abi,
      signer
    )
    // const transaction=tokenContract.createToken("https://gateway.pinata.cloud/ipfs/QmdCfj3fiE1LqV5Q6TxDFyGWkVd6BNCrYsW27LE1tcLjqB")
    // console.log(tokenContract)
    const data = await marketContract.fetchMarketItems()
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    //    console.log(data);
    const items = await Promise.all(
      data.map(async i => {
        // const tokenUri = await tokenContract.tokenURI(i.tokenId)
        // console.log(tokenUri)

        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        console.log(i.seller)
        // const meta = await axios.get(tokenUri)
        console.log(tokenUri.toString())
        let price = ethers.utils.formatUnits(i.price, 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner
          // image: meta.data.image ,
        }
        return item
      })
    )
    setLoading('loaded')
    setNfts(items)
    // setLoadingState('loaded')
  }
  const FetchMarketData = () => {}
  useEffect(() => {
    FetchMarketData()
  }, [])
  //   console.log(nft)
  return (
    <>
      <div className='row nftshow-row'>
        {showDetail == false ? (
          <>
            {' '}
            {nft.map((item, index) => {
              return (
                <>
                  <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                    <Card key={index} data={item} index={index} />
                  </div>
                </>
              )
            })}
          </>
        ) : (
          <NFTDetail />
        )}
      </div>
    </>
  )
}
export default NFTShow
