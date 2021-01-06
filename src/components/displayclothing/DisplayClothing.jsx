import React, { useState } from "react";
import "./DisplayClothing.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/user/user.actions";
import Snackbars from "../../components/snackbars/Snackbars";

function DisplayClothing({ itemImage, itemName, itemLogo, itemCompany, itemColor, itemPrice = 1000, addItem }) {
    const [size, setSize] = useState("S");
    const [alertOpen, setAlertOpen] = useState(false);

    const handleSubmit = () => {
        addItem({ name: itemName, size: size, price: itemPrice });
        setAlertOpen(true);
    };

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
                        <span className={`${itemColor}1-c  ${size === "S" ? "active-c" : ""}`} onClick={() => setSize("S")}>
                            S
                        </span>
                        <span className={`${itemColor}1-c ${size === "M" ? "active-c" : ""}`} onClick={() => setSize("M")}>
                            M
                        </span>
                        <span className={`${itemColor}1-c ${size === "L" ? "active-c" : ""}`} onClick={() => setSize("L")}>
                            L
                        </span>
                        <span className={`${itemColor}1-c ${size === "XL" ? "active-c" : ""}`} onClick={() => setSize("XL")}>
                            XL
                        </span>
                    </div>

                    <div className='color-c'>
                        <h3>Price : Rs.{itemPrice}</h3>
                    </div>
                    <button className={`${itemColor}2-c`} onClick={handleSubmit}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <Snackbars
                open={alertOpen}
                handleClose={() => setAlertOpen(false)}
                status='success'
                message={"Successfully added " + itemName + " to the cart"}
                autoHideDuration={1000}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(DisplayClothing);
