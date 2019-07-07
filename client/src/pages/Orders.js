import React, { Component } from "react";
import PastOrder from "../components/PastOrder/pastOrder";
import BookSuggestions from "../components/BookSuggestions/bookSuggestions";
import Footer from "../components/Footer/footer";
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
        if (window.location.protocol !== 'https:') {
            window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
        
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
            <span>
                <div className="ordersPage">
                    <h4 className="yourOrdersHeader">Your Orders</h4>

                    {this.state.orders && this.state.orders.length > 0 ? (
                        this.state.orders.map(order => (
                            <PastOrder
                                date={order.date}
                                items={order.items}
                                price={order.totalPrice}
                            />
                        ))
                        ) : (
                            <div className="noOrdersNote">No orders found.</div>
                    )}

                    <BookSuggestions
                        displayClass="order"
                        sendToCart={this.props.sendToCart}
                    />

                </div>

                <Footer />

            </span>
        )
    }
}

export default Orders;