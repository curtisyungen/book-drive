import React, { Component } from "react";
// import Container from "../components/Container/container";
import OrderDetail from "../components/OrderDetail/orderDetail";
import ShippingInfo from "../components/ShippingInfo/shippingInfo";
import API from "../utils/API";
import "./Success.css";

class Success extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            shippingAddress: "",
            order: null,
        }
    }

    componentDidMount = () => {

        // Get payment info from URL
        let parameters = window.location.href.split("?")[1].split("&");
        let paymentId = parameters[0].split("=")[1];
        let payerId = parameters[2].split("=")[1];

        // Process payment
        API.successfulPayment(paymentId, payerId)
            .then((res) => {

                // If payment approved, get shipping address
                if (res.data.state === "approved") {
                    this.setState({
                        shippingAddress: res.data.transactions[0].item_list.shipping_address,
                        order: res.data.transactions[0].item_list.items,
                        user: this.props.user,
                        cart: this.props.cart,
                    }, () => {
                        this.saveBookOrder();
                    });
                }
            });
    }

    saveBookOrder = () => {

        let cart = this.props.cart;
        let total = 0;

        for (var book in cart) {
            total += cart[book].price;
        }

        let order = {
            name: this.state.user.name,
            email: this.state.user.email,
            date: new Date(),
            totalPrice: total,
            items: this.props.cart,
            itemQty: this.props.cart.length,
            shippingAddress: this.state.shippingAddress,
        }

        console.log("Order", order);

        API.createBookOrder(order)
            .then((res) => {
                console.log("Result", res);
                alert("Order saved!");
            });
    }

    render() {
        return (
            <div className="orderConfirmation">
                
                <div>
                    <p className="thankYou">Thank you, your order has been placed.</p>
                    <p className="confirmation">Please check your email for order confirmation.</p>
                </div>

                <OrderDetail 
                    order={this.state.order}
                />

                <ShippingInfo 
                    shippingAddress={this.state.shippingAddress}
                />

            </div>
        )
    }
}

export default Success;