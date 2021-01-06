import React, { useState } from "react";
import "./OrderCard.css";
import OrderStepper from "../orderStepper/OrderStepper";
import Popup from "../popup/Popup";
import OrderDetails from "../orderDetails/OrderDetails";
import AlertPopup from "../alertPopup/AlertPopup";
import { order } from "../../server/apis/order.api";

function OrderCard({ status, _id, pin, address, city, items, totalPrice, created_at, updated_at, getData }) {
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const handldeCancel = async () => {
        try {
            await order.cancel({ order_id: _id });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='orderCard'>
            <div className='orderCard__top'>
                <h3>ORDERED ON : {created_at}</h3>
                <h1>Rs.{totalPrice}</h1>
            </div>
            <div className='orderCard__middle'>
                <button className='orderCard__viewDetails' onClick={() => setOpen(true)}>
                    {" "}
                    View Details{" "}
                </button>
                {status === 4 ? null : status === 0 ? (
                    <h3>This Order was cancelled</h3>
                ) : (
                    <button className='orderCard__cancelOrder' onClick={() => setAlertOpen(true)}>
                        {" "}
                        Cancel Order{" "}
                    </button>
                )}
            </div>

            <OrderStepper step={status} />
            <Popup open={open} handleClose={() => setOpen(false)} heading={"Order Id : " + created_at}>
                <OrderDetails pin={pin} address={address} city={city} items={items} totalPrice={totalPrice} />
            </Popup>
            <AlertPopup
                handleCancel={handldeCancel}
                open={alertOpen}
                handleClose={() => setAlertOpen(false)}
                status='success'
                message='Successfully Canceled Your Order'
                getData={getData}
            />
        </div>
    );
}

export default OrderCard;
