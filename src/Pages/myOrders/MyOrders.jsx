import React, { Component } from "react";
import OrderStepper from "../../components/orderStepper/OrderStepper";

class MyOrders extends Component {
    render() {
        return (
            <div>
                <OrderStepper step={4} />
            </div>
        );
    }
}

export default MyOrders;
