import React, { Component } from "react";
import API from "../../utils/API";
import "./orderDetail.css";

class ShippingInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shippingAddress: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            shippingAddress: this.props.shippingAddress,
        });
    }

    render() {
        return (
            <div>
                <h4>Shipped to:</h4>
                <div>
                    {this.state.shippingAddress.recipient_name}
                </div>
                <div>
                    {this.state.shippingAddress.line1}
                </div>
                <div>
                    {this.state.shippingAddress.city},&nbsp;
                {this.state.shippingAddress.state}&nbsp;
                {this.state.shippingAddress.postal_code}
                </div>
                <div>
                    {this.state.shippingAddress.country_code}
                </div>
            </div>
        )
    }
}

export default ShippingInfo;