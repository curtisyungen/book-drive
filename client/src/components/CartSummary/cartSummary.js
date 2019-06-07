import React, { Component } from "react";
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
            subtotal: this.props.subtotal,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                subtotal: this.props.subtotal,
            });
        }
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
                >
                    <a className="proceedToCheckout" href="/checkout">Proceed to checkout</a>
                </button>

            </div>
        )
    }
}

export default CartSummary;