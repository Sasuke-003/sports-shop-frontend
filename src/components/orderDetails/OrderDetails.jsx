import React, { useState } from "react";
import "./OrderDetails.css";
import Divider from "@material-ui/core/Divider";

function OrderDetails({ pin, address, city, items, totalPrice }) {
    // const [items, setItems] = useState([{}, {}, {}, {}, {}, {}]);
    return (
        <div className='orderDetails'>
            {items.map((item, uIndex) =>
                item.size.map((data, dIndex) => (
                    <div key={uIndex + item.name + dIndex} className='orderDetails__item'>
                        <div className='orderDetails__itemName'>
                            <img src={"http://localhost:9999/item/img/" + item.name + ".png"} alt='oops' />
                            <h2>
                                {item.name} (Size:{data.size})&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;{data.qty}
                            </h2>
                        </div>
                        <div className='orderDetails__itemPrice'>
                            <h2>
                                ${item.price}&nbsp;&nbsp;&nbsp;x &nbsp;&nbsp;&nbsp;{data.qty}&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;$
                                {item.price * data.qty}
                            </h2>
                        </div>
                    </div>
                ))
            )}
            <Divider />
            <h1>${totalPrice}</h1>
        </div>
    );
}

export default OrderDetails;
