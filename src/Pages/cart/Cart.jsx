import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { addItem, deleteItem } from "../../redux/user/user.actions";
import Popup from "../../components/popup/Popup";
import "./Cart.css";
import FinalizeOrder from "../../components/finalizeOrder/FinalizeOrder";

class Cart extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [],
            totalPrice: 0,
            open: false,
        };
    }

    propsToState = () => {
        const { cart } = this.props;
        let tPrice = 0;
        const itemList = [];
        console.log(cart);
        for (const itemName of Object.keys(cart))
            itemList.push({
                name: itemName,
                size: cart[itemName],
            });
        for (let i = 0; i < itemList.length; i++) {
            const sizeList = [];
            for (const itemSize of Object.keys(itemList[i]["size"])) {
                if (itemSize === "price") {
                    itemList[i]["price"] = itemList[i]["size"][itemSize];
                } else {
                    sizeList.push({
                        size: itemSize,
                        qty: itemList[i]["size"][itemSize],
                    });
                }
            }
            itemList[i]["size"] = sizeList;
        }
        console.log(itemList);

        for (let i = 0; i < itemList.length; i++) {
            let itemPrice = itemList[i]["price"];
            for (let j = 0; j < itemList[i]["size"].length; j++) {
                tPrice += itemPrice * itemList[i]["size"][j]["qty"];
            }
        }

        this.setState({ items: itemList, totalPrice: tPrice });
    };

    componentDidMount() {
        this.propsToState();
    }

    handleOpenClosePopup = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                open: !prevState.open,
            };
        });
    };

    render() {
        const { items, totalPrice, open } = this.state;
        const { addItem, deleteItem } = this.props;
        return (
            <div className='cart'>
                {items.map((item, uIndex) =>
                    item.size.map((data, dIndex) => (
                        <div key={uIndex + item.name + dIndex} className='cart__item'>
                            <div className='cart__itemName'>
                                <img src={"http://localhost:9999/item/img/" + item.name + ".png"} alt='oops' />
                                <h2>
                                    {item.name} (Size:{data.size})&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;{data.qty}
                                </h2>
                            </div>
                            <div className='cart__itemPrice'>
                                <h2>
                                    Rs.{item.price}&nbsp;&nbsp;&nbsp;x &nbsp;&nbsp;&nbsp;{data.qty}&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;Rs.
                                    {item.price * data.qty}
                                </h2>
                            </div>
                            <div className='cart__addDelete'>
                                <button
                                    className='cart__add'
                                    onClick={() => {
                                        addItem({ name: item.name, size: data.size });
                                        this.propsToState();
                                    }}>
                                    ADD
                                </button>
                                <button
                                    className='cart__delete'
                                    onClick={() => {
                                        deleteItem({ name: item.name, size: data.size });
                                        this.propsToState();
                                    }}>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    ))
                )}
                {items.length === 0 ? (
                    <h1 className='cart__empty'>Your cart is empty!</h1>
                ) : (
                    <div className='cart__buy'>
                        <h1>Total Price &nbsp;:&nbsp;&nbsp;Rs.{totalPrice}</h1>
                        <button className='cart__button' onClick={this.handleOpenClosePopup}>
                            BUY NOW
                        </button>
                    </div>
                )}
                <Popup open={open} handleClose={this.handleOpenClosePopup} heading='Finalize your order' noButton>
                    <FinalizeOrder closePopup={this.handleOpenClosePopup} updateRedux={this.propsToState} />
                </Popup>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    cart: state.sportShopUser.cart,
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(mapSateToProps, mapDispatchToProps)(Cart);
