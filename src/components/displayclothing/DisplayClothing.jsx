import React, { useState } from "react";
import "./DisplayClothing.css";

function DisplayClothing({ itemImage, itemName, itemLogo, itemCompany, itemColor }) {
    const [size, setSize] = useState(7);
    return (
        <div className='container-c'>
            <div className={`card-c ${itemCompany}-c ${itemColor}-c`}>
                <div className='logo-c'>
                    <img src={itemLogo} alt='oops' />
                </div>
                <div className='imgBx-c'>
                    <img src={itemImage} alt='oops' />
                </div>
                <div className='contentBx-c'>
                    <h2>{itemName}</h2>
                    <div className='size-c'>
                        <h3>Size :</h3>
                        <span className={`${itemColor}1-c  ${size === 7 ? "active-c" : ""}`} onClick={() => setSize(7)}>
                            S
                        </span>
                        <span className={`${itemColor}1-c ${size === 8 ? "active-c" : ""}`} onClick={() => setSize(8)}>
                            M
                        </span>
                        <span className={`${itemColor}1-c ${size === 9 ? "active-c" : ""}`} onClick={() => setSize(9)}>
                            L
                        </span>
                        <span className={`${itemColor}1-c ${size === 10 ? "active-c" : ""}`} onClick={() => setSize(10)}>
                            XL
                        </span>
                    </div>

                    <div className='color-c'>
                        <h3>T-Shirt Number : 7</h3>
                    </div>
                    <a className={`${itemColor}2-c`} href='#'>
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DisplayClothing;
