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
            <div>
                <h4>Shipped to:</h4>
                <div>
                    {this.props.shippingAddress.recipient_name}
                </div>
                <div>
                    {this.props.shippingAddress.line1}
                </div>
                <div>
                    {this.props.shippingAddress.city},&nbsp;
                {this.props.shippingAddress.state}&nbsp;
                {this.props.shippingAddress.postal_code}
                </div>
                <div>
                    {this.props.shippingAddress.country_code}
                </div>
            </div>
        )
    }
}

export default ShippingInfo;