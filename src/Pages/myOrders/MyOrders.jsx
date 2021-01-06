import moment from "moment";
import React, { Component } from "react";
import OrderCard from "../../components/orderCard/OrderCard";
import { order } from "../../server/apis/order.api";

class MyOrders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    getData = async () => {
        // let res = {};
        try {
            const res = await order.get();
            for (let i = 0; i < res.length; i++) {
                let itm = [];
                let tPrice = 0;
                for (const itemName of Object.keys(res[i]["items"])) {
                    itm.push({
                        name: itemName,
                        size: res[i]["items"][itemName],
                        // price: res[i]["items"][itemName]["price"],
                    });
                }

                for (let i = 0; i < itm.length; i++) {
                    const sizeList = [];
                    for (const itemSize of Object.keys(itm[i]["size"])) {
                        if (itemSize === "price") {
                            itm[i]["price"] = itm[i]["size"][itemSize];
                        } else {
                            sizeList.push({
                                size: itemSize,
                                qty: itm[i]["size"][itemSize],
                            });
                        }
                    }
                    itm[i]["size"] = sizeList;
                }
                // res[i]["items"] = JSON.parse(JSON.stringify(itm));

                for (let i = 0; i < itm.length; i++) {
                    let itemPrice = itm[i]["price"];
                    for (let j = 0; j < itm[i]["size"].length; j++) {
                        tPrice += itemPrice * itm[i]["size"][j]["qty"];
                    }
                }

                for (let j = 0; j < itm.length; j++) {
                    delete itm[j]["size"]["price"];
                }
                res[i]["totalPrice"] = tPrice;
                res[i]["items"] = itm;
                this.setState({
                    orders: res,
                });
            }
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { orders } = this.state;
        return (
            <div>
                {orders.map(({ status, _id, pin, address, city, items, totalPrice, created_at, updated_at }) => (
                    <OrderCard
                        key={_id}
                        status={status + 1}
                        _id={_id}
                        pin={pin}
                        address={address}
                        city={city}
                        items={items}
                        totalPrice={totalPrice}
                        created_at={created_at}
                        updated_at={updated_at}
                        getData={this.getData}
                    />
                ))}
            </div>
        );
    }
}

export default MyOrders;
