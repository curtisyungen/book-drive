import React, { Component } from "react";
import Container from "../components/Container/container";
import API from "../utils/API";
import "./Checkout.css";

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
            <Container>
                <div
                    className="btn btn-success payPalBtn"
                    onClick={this.checkoutWithPayPal}
                >
                    Pay with PayPal
                </div>
            </Container>
        )
    }
}

export default Checkout;