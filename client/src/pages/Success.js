import React, { Component } from "react";
// import Container from "../components/Container/container";
import OrderDetail from "../components/OrderDetail/orderDetail";
import ShippingInfo from "../components/ShippingInfo/shippingInfo";
import Footer from "../components/Footer/footer";
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

        let total = sessionStorage.getItem("total");

        // Process payment
        API.successfulPayment(paymentId, payerId, total)
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

                    let $this = this;

                    // Store shipping and order info in state
                    this.setState({
                        shippingAddress: res.data.transactions[0].item_list.shipping_address,
                    }, () => {

                        // Assemble order info
                        let order = {
                            name: this.state.user.name,
                            email: this.state.user.email,
                            date: new Date(),
                            totalPrice: total,
                            items: JSON.stringify(this.props.cart),
                            itemList: "",
                            itemQty: this.props.cart.length,
                            shippingAddress: JSON.stringify(this.state.shippingAddress),
                        }

                        // Add items ordered to list
                        for (var item in this.props.cart) {
                            order.itemList += (
                            `
                            ${item + 1}) ${this.props.cart[item].title} by ${this.props.cart[item].authorFirst} ${this.props.cart[item].authorLast}
                                
                            `);
                        }

                        // Store order in database
                        $this.saveBookOrder(order);

                        // Update book purchase status in database
                        $this.purchaseBook(cart);

                        // Send confirmation email to user
                        $this.sendConfirmationEmail(order);
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

    sendConfirmationEmail = (order) => {
        API.sendConfirmationEmail(order)
            .then((res) => {
                console.log(res);
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
            <div>
                <div className="successPage">

                    <div className="orderConfirmation">
                        <p className="thankYou">Thank you, your order has been placed.</p>
                        <p className="confirmation">Please check your email for order confirmation.</p>
                    
                        <OrderDetail
                            order={this.state.order}
                        />

                        <ShippingInfo
                            shippingAddress={this.state.shippingAddress}
                        />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Success;
