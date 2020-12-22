import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className='header'>
            <h2 className='header__title'>
                <big>The Sport Shop</big>
            </h2>
            <div className='header__links'>
                <Link key={1} to='/' className='active'>
                    HOME
                </Link>
                <Link key={2} to='/cart' className='active'>
                    CART
                </Link>
                <Link key={3} to='/myorders' className='active'>
                    MY ORDERS
                </Link>
                <Link key={4} to='/login' className='active'>
                    LOGOUT
                </Link>
            </div>
        </div>
    );
}

export default Header;
