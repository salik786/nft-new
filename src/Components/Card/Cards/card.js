// import FavEvents from "../BadgeFav/badgefav";
import "./card.css"
import { useEffect, useState } from "react"
import { SiEthereum } from 'react-icons/si';
import { useCookies } from "react-cookie"
import MintNft from "../../MintNft/mint";
const Card = ({ data, index }) => {
    // this compoennt will receive id and data to display and to favourites based on id
    const [cookies, setCookie, removeCookie] = useCookies(['nft-detail']);
    const [loading,setLoading]=useState("loading")
    const ShowDetails = (data) => {
        setCookie("nft", data);


    }
    return (

        <div class="card card-margin m-4 ">

            <div class="card-body p-4">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper d-flex flex-column text-left">
                        <div className="w-100"><h5>Token Id : {data.tokenId}</h5></div>
                        <hr></hr>
                        <div class="widget-49-date-primary ">
                            <img className="widget-49-date-day " src="https://picsum.photos/200/300?random=1"></img>
                        </div>
                        <hr></hr>

                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                          Creator
                        </div>
                        <div >
                           <h5 className=""> {data.name}</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between nft-price">
                        <div>
                            Price
                        </div>
                        <div>
                            <SiEthereum />{data.price}
                        </div>
                    </div>

                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-primary p-3" onClick={() => { ShowDetails(data) }}>Details</a>
                        {/* <MintNft/> */}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Card;