import React, { Component } from "react";
import Container from "../components/Container/container";
import PastOrder from "../components/PastOrder/pastOrder";
import BookSuggestions from "../components/BookSuggestions/bookSuggestions";
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
            this.getOrders();
        });
    }

    getOrders = () => {
        if (this.props.user || this.state.user) {
            API.getUserBookOrders(this.props.user.email || this.state.user.email)
            .then((res) => {
                this.setState({
                    orders: res.data,
                });
            });
        }
    }

    render() {
        return (
            <Container>
                <h4 className="yourOrdersHeader">Your Orders</h4>

                {this.state.orders ? (
                    this.state.orders.map(order => (
                        <PastOrder
                            date={order.date}
                            items={order.items}
                            price={order.totalPrice}
                        />
                    ))
                ) : (
                    <p>No orders found.</p>
                )}

                <BookSuggestions 
                    displayClass="order"
                />

            </Container>

        )
    }
}

export default Orders;