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

        // console.log(window.location.href);
        let payId = window.location.href.split("?")[1].split("&");
        let payerId = window.location.href.split("&")[1].split("&");
        console.log("PayId", payId);
        console.log("PayerId", payerId);

        API.successfulPayment(payId, payerId)
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