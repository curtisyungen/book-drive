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
            user: null,
            cart: null,
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

                // If payment approved, get shipping and order info
                if (res.data.state === "approved") {

                    // Store user and cart in state
                    this.setState({
                        user: this.props.user,
                        cart: this.props.cart,
                    });

                    // Get total from cart
                    let cart = this.props.cart;
                    let total = 0;
                    for (var book in cart) {
                        total += cart[book].price;
                    }

                    // Assemble order info
                    let order = {
                        name: this.state.user.name,
                        email: this.state.user.email,
                        date: new Date(),
                        totalPrice: total,
                        items: JSON.stringify(this.props.cart),
                        itemQty: this.props.cart.length,
                        shippingAddress: JSON.stringify(this.state.shippingAddress),
                    }

                    let $this = this;

                    // Store shipping and order info in state
                    this.setState({
                        shippingAddress: res.data.transactions[0].item_list.shipping_address,
                        order: order,
                    }, () => {

                        // Store order in database
                        $this.saveBookOrder(order);

                        // Update book purchase status in database
                        $this.purchaseBook(cart);
                    });
                }
            });
    }

    saveBookOrder = (order) => {
        API.createBookOrder(order)
            .then((res) => {
                console.log("Result", res);
            });
    }

    purchaseBook = (cart) => {

        let book;
        for (var b in cart) {
            book = {
                title: cart[b].title,
                authorFirst: cart[b].authorFirst,
                authorLast: cart[b].authorLast,
            }

            API.purchaseBook(book, this.state.user.email)
                .then((res) => {
                    console.log(res);
                });
        }
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