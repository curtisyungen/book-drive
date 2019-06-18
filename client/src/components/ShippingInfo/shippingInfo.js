import React, { Component } from "react";
import API from "../../utils/API";
import "./shippingInfo.css";

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
            <div className="shippingInfo">
                <p className="shippedTo">Shipped to:</p>

                <p>{this.props.shippingAddress.recipient_name}</p>
                <p>{this.props.shippingAddress.line1}</p>
                <p>
                    {this.props.shippingAddress.city},&nbsp;
                    {this.props.shippingAddress.state}&nbsp;
                    {this.props.shippingAddress.postal_code}
                    {this.props.shippingAddress.country_code}
                </p>
            </div>
        )
    }
}

export default ShippingInfo;