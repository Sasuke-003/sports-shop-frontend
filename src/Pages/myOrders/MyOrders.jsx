import React, { Component } from "react";
import OrderCard from "../../components/orderCard/OrderCard";

class MyOrders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [
                {
                    orderId: "9848566565445656",
                    price: "500",
                    state: 1,
                },
                {
                    orderId: "45458578656346546",
                    price: "999.99",
                    state: 2,
                },
                {
                    orderId: "89678678678678678",
                    price: "569.99",
                    state: 3,
                },
                {
                    orderId: "456965456456456456",
                    price: "120",
                    state: 4,
                },
                {
                    orderId: "3837367863786786876",
                    price: "1000",
                    state: 4,
                },
                {
                    orderId: "9676546464564564564",
                    price: "5000",
                    state: 4,
                },
            ],
        };
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
