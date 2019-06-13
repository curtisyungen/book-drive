import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
            redirectToCheckout: false,
        }, () => {
            console.log(this.state);
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                subtotal: this.props.subtotal,
            });
        }
    }

    redirectToCheckout = () => {
        this.setState({
            redirectToCheckout: true,
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
                        this.redirectToCheckout();
                    }}
                >
                    Proceed to checkout
                </button>

                {this.state.redirectToCheckout ? (
                    <Redirect 
                        to={{
                            pathname: "/checkout",
                            state: {
                                cart: this.state.cart,
                                total: this.state.subtotal,
                            }
                        }}
                    />
                ) : (
                    <></>
                )}

            </div>
        )
    }
}

export default CartSummary;