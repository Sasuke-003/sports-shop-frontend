import React from "react";
import "./DisplayItem.css";

function DisplayItem({ itemImage, itemName }) {
    return (
        <div className='item'>
            <img src={itemImage} className='item__image' alt='oops...' />
            <div className='item__content'>
                <h1 className='item__name'>{itemName}</h1>
            </div>
        </div>
    );
}

export default DisplayItem;
