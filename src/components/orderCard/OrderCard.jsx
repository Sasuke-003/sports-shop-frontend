import React, { useState } from "react";
import "./OrderCard.css";
import OrderStepper from "../orderStepper/OrderStepper";
import Popup from "../popup/Popup";
import OrderDetails from "../orderDetails/OrderDetails";
import AlertPopup from "../alertPopup/AlertPopup";

function OrderCard({ orderId, price, state }) {
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    return (
        <div className='orderCard'>
            <div className='orderCard__top'>
                <h3>ORDERED ON : {orderId}</h3>
                <h1>${price}</h1>
            </div>
            <div className='orderCard__middle'>
                <button className='orderCard__viewDetails' onClick={() => setOpen(true)}>
                    {" "}
                    View Details{" "}
                </button>
                <button className='orderCard__cancelOrder' onClick={() => setAlertOpen(true)}>
                    {" "}
                    Cancel Order{" "}
                </button>
            </div>

            <OrderStepper step={state} />
            <Popup open={open} handleClose={() => setOpen(false)} orderId={orderId}>
                <OrderDetails />
            </Popup>
            <AlertPopup open={alertOpen} handleClose={() => setAlertOpen(false)} />
        </div>
    );
}

export default OrderCard;
