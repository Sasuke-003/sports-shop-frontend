import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import Header from "./components/header/Header";
import Cart from "./Pages/cart/Cart";
import MyOrders from "./Pages/myOrders/MyOrders";

import Login from "./Pages/login/Login.jsx";
import SignUp from "./Pages/signup/SignUp";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => (!this.props.currentUser ? <Redirect to='/signin' /> : <Home />)} />
                    <Route exact path='/login' render={() => (this.props.currentUser ? <Redirect to='/' /> : <Login />)} />
                    <Route exact path='/signup' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignUp />)} />
                    <Route exact path='/cart' render={() => (this.props.currentUser ? <Cart /> : <Redirect to='/login' />)} />
                    <Route exact path='/myorders' render={() => (this.props.currentUser ? <MyOrders /> : <Redirect to='/login' />)} />
                </Switch>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapSateToProps)(App);
