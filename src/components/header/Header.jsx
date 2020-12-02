import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className='header'>
            <h2 className='header__title'>
                <big>The Sport Shop</big>
            </h2>
            <div class='header__links'>
                <a key={1} href='#' className='active'>
                    HOME
                </a>
                <a key={2} href='#' className='active'>
                    CART
                </a>
                <a key={3} href='#' className='active'>
                    MY ORDERS
                </a>
                <a key={4} href='#' className='active'>
                    LOGOUT
                </a>
            </div>
        </div>
    );
}

export default Header;
