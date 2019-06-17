import React, { Component } from "react";
import API from "../../utils/API";
import "./cartSummary.css";

class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {

        this.setState({
            cart: this.props.cart,
            subtotal: this.props.subtotal,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                cart: this.props.cart,
                subtotal: this.props.subtotal,
            });
        }
    }

    checkoutWithPayPal = () => {

        let items = [];
        let item;
        let cart = this.state.cart;

        // for (var book in cart) {
        //     item = {
        //         name: cart[book].title,
        //         sku: book,
        //         price: cart[book].price,
        //         currency: "USD",
        //         quantity: 1
        //     }

        //     items.push(item);
        // }

        items = [{
                name: "Test",
                sku: "001",
                price: "5.00",
                currency: "USD",
                quantity: 1
        }];
        

        API.payUsingPayPal(5.00)
            .then((res) => {
                console.log(res);

                for (var link in res.data.links) {
                    if (res.data.links[link].rel === "approval_url") {
                        window.open(res.data.links[link].href);
                    }
                }
            });
    }

    render() {
        return (
            <div
                className="cartSummary"
            >
                <div>
                    <span className="subtotalTitle">Subtotal{this.state.cart ? (` (${this.state.cart.length}) items):`):(":")}</span>
                    <span className="subtotal">&nbsp;{`$${parseFloat(Math.round(this.state.subtotal * 100) / 100).toFixed(2)}`}</span>
                </div>

                <br/>

                <button
                    className="checkoutBtn"
                    onClick={(event) => {
                        event.preventDefault();
                        this.checkoutWithPayPal();
                    }}
                >
                    Checkout with PayPal
                </button>
            </div>
        )
    }
}

export default CartSummary;