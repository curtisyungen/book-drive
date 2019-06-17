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
        API.successfulPayment()
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