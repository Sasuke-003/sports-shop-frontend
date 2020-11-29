import React from "react";
import "./Header.css";

function Header() {
    return (
        <div class='header'>
            <h2 className='header__title'>
                <big>The Food Lounge</big>
            </h2>
            <div className='header__links'>
                <a href='#' className='active'>
                    HOME
                </a>
                <a href='#' className='active'>
                    SERVICES
                </a>
                <a href='#' className='active'>
                    FEEDBACK
                </a>
                <a href='#' className='active'>
                    ABOUT US
                </a>
            </div>
        </div>
    );
}

export default Header;
