import React, { Component } from "react";
import Container from "../components/Container/container";
import OrderDetail from "../components/OrderDetail/orderDetail";
import ShippingInfo from "../components/ShippingInfo/shippingInfo";
import API from "../utils/API";
import "./Success.css";

class Success extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            shippingAddress: "",
            order: null,
        }
    }

    componentDidMount = () => {

        // Get payment info from URL
        let parameters = window.location.href.split("?")[1].split("&");
        let paymentId = parameters[0].split("=")[1];
        let payerId = parameters[2].split("=")[1];

        // Process payment
        API.successfulPayment(paymentId, payerId)
            .then((res) => {
                console.log("Success", res);

                // If payment approved, get shipping address
                if (res.data.state === "approved") {
                    this.setState({
                        shippingAddress: res.data.transactions[0].item_list.shipping_address,
                        order: res.data.transactions[0].item_list.items,
                    }, () => {
                        console.log(this.state);
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                
                <div>
                    <p>Payment successful! Your books are on their way!</p>
                </div>

                <OrderDetail 
                    order={this.state.order}
                />

                <ShippingInfo 
                    shippingAddress={this.state.shippingAddress}
                />

            </Container>
        )
    }
}

export default Success;