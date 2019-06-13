import React, { Component } from "react";
import API from "../../utils/API";
import "./cartSummary.css";

class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0,
        }
    }

    componentDidMount = () => {

        this.setState({
            cart: this.props.cart,
            subtotal: this.props.subtotal,
        }, () => {
            console.log(this.state);
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

        let purchase = {
            cart: this.state.cart,
            total: this.state.subtotal,
        }

        API.payUsingPayPal(purchase)
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
                <div>Subtotal:
                    <span className="subtotal">&nbsp;{`$${this.state.subtotal}`}</span>
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