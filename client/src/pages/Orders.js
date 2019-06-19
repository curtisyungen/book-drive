import React, { Component } from "react";
import API from "../utils/API";
import "./Orders.css";

class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
        API.getUserBookOrders(this.state.user.email)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        return (
            <></>
        )
    }
}

export default Orders;