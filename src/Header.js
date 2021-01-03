import React from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { useSelector } from "react-redux"
import "./Header.css"
import { auth } from "./firebase"

function Header() {
    const basket = useSelector(state => state.shopBasket.basket)
    const user = useSelector(state => state.shopBasket.user)
    
    const login = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img
                className="header__logo"             
                src="https://cdn1.vectorstock.com/i/1000x1000/60/45/women-silhouette-icon-on-black-vector-23846045.jpg"
                 alt="" />        
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo"> {user? "Sign out" : "Sign in"}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                </Link>

                <Link to={user? "/checkout" : "/"} className="header__link">
                    <div className="header__optionBasket">
                    <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount"> {basket.length}</span>
                    </div>
                </Link>
            </div>

            
        </nav>
    )
}


export default Header
