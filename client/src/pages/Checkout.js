import React, { Component } from "react";
import Container from "../components/Container/container";
import "./Contact.css";

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    checkoutWithPayPal = () => {
        console.log("Paypal");
    }

    render() {
        return (
            <div
                className="payPalBtn"
                onClick={this.checkoutWithPayPal}
            >
                <img 
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" 
                    alt="Check out with PayPal" 
                />
            </div>
        )
    }
}

export default Checkout;