import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"
function Header() {
    return (
        <div>
            <div className="info1 d-flex">
                <div className=" w-30">
                    <div className='header-title mb-4'>
                        <h1 className='title mb-4'>WE PROMISE CREATION WILL BELONG TO CREATOR ONLY </h1>
                    <p className='sub mb-4'>We will work to make marketplace better and user friemd;y for newbies and every type of user. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    <button className='btn btn-warning  '><Link className='text-dark text-decoration-none ' to="market">Go to Market</Link></button>
                    </div>

                </div>
                <div className=" w-70">
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/k4RnKmv/istockphoto-1133578188-612x612.jpg" alt="istockphoto-1133578188-612x612" border="0"/></a></div>

            </div>
        </div>
    )
}

export default Header
