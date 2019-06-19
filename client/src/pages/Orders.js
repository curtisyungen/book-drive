import React, { Component } from "react";
import PastOrder from "../components/PastOrder/pastOrder";
import API from "../utils/API";
import "./Orders.css";

class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            orders: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            user: this.props.user,
        }, () => {
            console.log(this.props);
            this.getOrders();
        });
    }

    getOrders = () => {
        API.getUserBookOrders(this.props.user.email || this.state.user.email)
            .then((res) => {
                this.setState({
                    orders: res.data,
                });
            });
    }

    render() {
        return (
            <span>
                {this.state.orders ? (
                    this.state.orders.map(order => (
                        <PastOrder
                            date={order.date}
                            items={order.items}
                            price={order.totalPrice}
                        />
                    ))
                ) : (
                    <></>
                )}

            </span>

        )
    }
}

export default Orders;