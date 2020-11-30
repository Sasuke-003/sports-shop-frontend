// import React from "react";
// import "./DisplayItem.css";

// function DisplayItem({ itemImage, itemName }) {
//     return (
//         <div className='item'>
//             <img src={itemImage} className='item__image' alt='oops...' />
//             <div className='item__content'>
//                 <h1 className='item__name'>{itemName}</h1>
//             </div>
//         </div>
//     );
// }

// export default DisplayItem;

import React, { useState } from "react";
import "./DisplayItem.css";

function DisplayItem({ itemImage, itemName, itemType, itemCompany, itemColor }) {
    const [size, setSize] = useState(7);
    return (
        <div className='container'>
            <div className={`card ${itemCompany} ${itemColor}`}>
                <div className='imgBx'>
                    <img src={itemImage} alt='oops' />
                </div>
                <div className='contentBx'>
                    <h2>{itemName}</h2>
                    <div className='size'>
                        <h3>Size :</h3>
                        <span className={`${itemColor}1  ${size === 7 ? "active" : ""}`} onClick={() => setSize(7)}>
                            7
                        </span>
                        <span className={`${itemColor}1 ${size === 8 ? "active" : ""}`} onClick={() => setSize(8)}>
                            8
                        </span>
                        <span className={`${itemColor}1 ${size === 9 ? "active" : ""}`} onClick={() => setSize(9)}>
                            9
                        </span>
                        <span className={`${itemColor}1 ${size === 10 ? "active" : ""}`} onClick={() => setSize(10)}>
                            10
                        </span>
                    </div>

                    <div className='color'>
                        <h3>Shoe Type : {itemType}</h3>
                    </div>
                    <a className={`${itemColor}2`} href='#'>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DisplayItem;
