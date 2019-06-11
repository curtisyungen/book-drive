import React, { Component } from "react";
// import Container from "../components/Container/container";
import API from "../utils/API";
import "./Contact.css";

const paypal = require("paypal-rest-sdk");

paypal.configure({
    "mode": "sandbox",
    "client_id": "AV8Iugkse1G7ntxZ15eI6KdFmCvKvEkSLBmWJWdWihsMIKnEDAcj_IFhjm9PZ7n1jCQeAgUrlXo-YQ2B",
    "client_secret": "EHPwT8Eo48LQNInmvHAqD_8Qy5PpQyGueniw55eh2Yzf38g0-CxDvhc8Jn4l7RTllfknIyqKCM4ogaHt",
});

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
                console.log(res);
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