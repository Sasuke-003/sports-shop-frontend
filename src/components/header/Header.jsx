import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Badge from "@material-ui/core/Badge";
import "./Header.css";

import { user } from "../../server/apis/user.api";

function Header(props) {
    return (
        <div className='header'>
            <h2 className='header__title'>
                <big>The Sport Shop</big>
            </h2>
            {props.currentUser ? (
                <div className='header__links'>
                    <Link key={1} to='/' className='active'>
                        HOME
                    </Link>

                    <Link key={2} to='/cart' className='active'>
                        <Badge badgeContent='4154' invisible={true}>
                            CART
                        </Badge>
                    </Link>

                    <Link key={3} to='/myorders' className='active'>
                        MY ORDERS
                    </Link>
                    <Link
                        key={4}
                        to='/login'
                        onClick={() => {
                            user.signOut();
                        }}
                        className='active'>
                        LOGOUT
                    </Link>
                </div>
            ) : (
                <div className='header__links'>
                    <Link key={1} to='/login' className='active'>
                        LOGIN
                    </Link>
                    <Link key={2} to='/signup' className='active'>
                        SIGNUP
                    </Link>
                </div>
            )}
        </div>
    );
}

const mapSateToProps = (state) => ({
    currentUser: state.sportShopUser.currentUser,
});

export default connect(mapSateToProps)(Header);
