import React, { useState } from "react";
import "./OrderDetails.css";
import Divider from "@material-ui/core/Divider";

function OrderDetails() {
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}]);
    return (
        <div className='orderDetails'>
            {items.map(() => (
                <div className='orderDetails__item'>
                    <div className='orderDetails__itemName'>
                        <img src='/assets/images/nike1.png' alt='oops' />
                        <h2>Nike Phantom II&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;2</h2>
                    </div>
                    <div className='orderDetails__itemPrice'>
                        <h2>$500&nbsp;&nbsp;&nbsp;x &nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;$1000</h2>
                    </div>
                </div>
            ))}
            <Divider />
            <h1>$6000</h1>
        </div>
    );
}

export default OrderDetails;
