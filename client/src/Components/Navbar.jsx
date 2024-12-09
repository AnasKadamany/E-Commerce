import React from 'react'
import "./navbar/navbar.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Divider} from '@mui/material';
const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <img src='/Logo.png'/>
        <div className='pathsContainer'>
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
            <p>Sign Up</p>
        </div>
        <div className='rightContainer'>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="search-input"
                />
                <button className="search-button">
                <SearchIcon className="search-icon"/>
                    
                </button>
            </div>
            <FavoriteBorderIcon/>
            <ShoppingCartIcon/>
            
        </div>
        
    </div>
  )
}

export default Navbar