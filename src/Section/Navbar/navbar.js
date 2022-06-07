import React from 'react'
// import logo from "../../../public/logoimg.png"
import './navbar.css'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import Wallet from '../../Components/wallet_connect/wallet'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWallet'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GridViewIcon from '@mui/icons-material/GridView';
const Navbar = () => {
  return (
    <>
      <header class='header' id='header'>
        <div class='header_toggle'>
          {' '}
          <i class='bx bx-menu' id='header-toggle'></i>{' '}
        </div>
       
        <div class='header_img'>
          {' '}
          <button className='connect-wallet'>
            <span className='pr-2'>
              <AccountBalanceWalletOutlinedIcon />
              <span>{" "}Connect Wallet</span>
            </span>
            <span>
              {/* {walletAddress.substring(0, 4) +
                '....' +
                walletAddress.substring(38, 42)} */}
            </span>
          </button>
          {/* <img src='https://i.imgur.com/hczKIze.jpg' alt='' />{' '} */}
        </div>
      </header>
      <div class='l-navbar' id='nav-bar'>
        <nav class='nav'>
          <div>
            {' '}
            <Link to='#' class='nav_logo'>
              {' '}
              <i class='bx bx-layer nav_logo-icon'></i>{' '}
              <span class='nav_logo-name'>NFTMANIA</span>{' '}
            </Link>
            <div class='nav_list'>
              {' '}
              <Link to='/market' class='nav_link active d-flex'>
                {' '}
                <i class='bx bx-grid-alt nav_icon'></i>{' '}
                <GridViewIcon />
                <span class='nav_name'>NFT Data</span>{' '}
              </Link>{' '}
              <Link to='/mint' class='nav_link d-flex'>
                {' '}
                <i class='bx bx-bar-chart-alt-2 nav_icon'></i>{' '}
                <AddCircleOutlineIcon />
                <span class='nav_name'>Add New </span>{' '}
              </Link>{' '}
            </div>
          </div>{' '}
          <Link to='#' class='nav_link'>
            {' '}
            <i class='bx bx-log-out nav_icon'></i>{' '}
            <span class='nav_name'>SignOut</span>{' '}
          </Link>
        </nav>
      </div>

      <div class='height bg-light'>
        <h4>Main Components</h4>
      </div>
    </>
  )
}
export default Navbar
