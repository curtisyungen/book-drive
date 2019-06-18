import React, { Component } from "react";
import Container from "../components/Container/container";
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

                {/* CONFIRMATION MESSAGE */}
                
                <div>
                    <p>Payment successful! Your books are on their way!</p>
                </div>

                {/* ORDER SUMMARY */}

                <div>
                    <p>Order Summary:</p>
                    <p>
                        {this.state.order ? (
                            this.state.order.map(item => (
                                <div>
                                    {item.name}
                                    {item.price}
                                    {item.quantity}
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
                    </p>
                </div>

                {/* SHIPPING INFO */}

                <div>
                    <h4>Shipped to:</h4>
                    <div>
                        {this.state.shippingAddress.recipient_name}
                    </div>
                    <div>
                        {this.state.shippingAddress.line1}
                    </div>
                    <div>
                        {this.state.shippingAddress.city}, 
                        {this.state.shippingAddress.state}&nbsp;
                        {this.state.shippingAddress.postal_code}
                    </div>
                    <div>
                        {this.state.shippingAddress.country_code}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Success;