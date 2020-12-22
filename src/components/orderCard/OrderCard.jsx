import React from "react";
import "./OrderCard.css";
import OrderStepper from "../orderStepper/OrderStepper";

function OrderCard({ orderId, price, state }) {
    return (
        <div className='orderCard'>
            <div className='orderCard__top'>
                <h3>ORDERED ON : {orderId}</h3>
                <h1>${price}</h1>
            </div>
            <div className='orderCard__middle'>
                <button className='orderCard__viewDetails'> View Details </button>
                <button className='orderCard__cancelOrder'> Cancel Order </button>
            </div>

            <OrderStepper step={state} />
        </div>
    );
}

export default OrderCard;
