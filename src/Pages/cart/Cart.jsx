import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { addItem, deleteItem } from "../../redux/cart/cart.actions";
import "./Cart.css";

class Cart extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [],
            totalPrice: 0,
        };
    }

    propsToState = () => {
        const { cart } = this.props;
        let tPrice = 0;
        const itemList = [];
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

    render() {
        const { items, totalPrice } = this.state;
        const { addItem, deleteItem } = this.props;
        return (
            <div className='cart'>
                {items.map((item, uIndex) =>
                    item.size.map((data, dIndex) => (
                        <div key={uIndex + item.name + dIndex} className='cart__item'>
                            <div className='cart__itemName'>
                                <img src='/assets/images/nike1.png' alt='oops' />
                                <h2>
                                    {item.name} (Size:{data.size})&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;{data.qty}
                                </h2>
                            </div>
                            <div className='cart__itemPrice'>
                                <h2>
                                    ${item.price}&nbsp;&nbsp;&nbsp;x &nbsp;&nbsp;&nbsp;{data.qty}&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;$
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
                    <div>
                        {" "}
                        <Divider />
                        <h1>${totalPrice}</h1>
                    </div>
                )}
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    cart: state.cart["cart"],
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(mapSateToProps, mapDispatchToProps)(Cart);
