import React, { Component } from "react";
// import Container from "../components/Container/container";
import API from "../utils/API";
import "./Success.css";

class Success extends Component {
    
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

        // Get payment info from URL
        let parameters = window.location.href.split("?")[1].split("&");

        let paymentId = parameters[0].split("=")[1];
        let token = parameters[1].split("=")[1];
        let payerId = parameters[2].split("=")[1];

        console.log("paymentId", paymentId);
        console.log("token", token);
        console.log("payerId", payerId);

        API.successfulPayment(paymentId, payerId)
            .then((res) => {
                console.log("Success", res);
            });
    }

    render() {
        return (
            <></>
        )
    }
}

export default Success;