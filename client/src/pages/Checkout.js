import React, { Component } from "react";
// import Container from "../components/Container/container";
import API from "../utils/API";
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
        API.payUsingPayPal()
            .then((res) => {
                for (link in payment.links) {
                    if (payment.links[link].rel === "approval_url") {
                        console.log(payment.links[link]);
                    }
                }
            });
    }

    render() {
        return (
            <div
                className="payPalBtn"
                onClick={this.checkoutWithPayPal}
            >
                Buy
            </div>
        )
    }
}

export default Checkout;