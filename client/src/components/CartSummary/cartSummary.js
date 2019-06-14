import React, { Component } from "react";
import API from "../../utils/API";
import "./cartSummary.css";

class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [
                {
                    title: "Test",
                    authorFirst: "Test",
                    authorLast: "Test",
                    price: 5.00,
                    imageURL: "Test",
                },
                {
                    title: "Test",
                    authorFirst: "Test",
                    authorLast: "Test",
                    price: 5.00,
                    imageURL: "Test",
                },
            ],
            subtotal: 0,
        }
    }

    componentDidMount = () => {

        this.setState({
            // cart: this.props.cart,
            subtotal: this.props.subtotal,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                // cart: this.props.cart,
                subtotal: this.props.subtotal,
            });
        }
    }

    checkoutWithPayPal = () => {

        let items = [];
        let item;
        let cart = this.state.cart;

        for (var book in cart) {
            item = {
                name: cart[book].title,
                sku: book,
                price: cart[book].price,
                currency: "USD",
                quantity: 1
            }

            items.push(item);
        }

        console.log(API.payUsingPayPal(items));
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