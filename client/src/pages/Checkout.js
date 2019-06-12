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
                className="payPalBtn"
                onClick={this.checkoutWithPayPal}
            >
                Buy
            </div>
        )
    }
}

export default Checkout;