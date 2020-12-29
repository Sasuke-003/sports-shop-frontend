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
        let res = {};
        try {
            res = await order.get();

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
                {orders.map(({ orderId, price, state }) => (
                    <OrderCard key={orderId} orderId={orderId} price={price} state={state} />
                ))}
            </div>
        );
    }
}

export default MyOrders;
