import React, { Component } from "react";
import API from "../../utils/API";
import "./orderDetail.css";

class OrderDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            order: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            order: this.props.order,
        });
    }

    render() {
        return (

            <div>
                <p>
                    {this.state.order ? (
                        this.state.order.map(item => (
                            <div>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{item.quantity}</p>
                            </div>
                        ))
                    ) : (
                            <></>
                        )}
                </p>
            </div>
        )
    }
}

export default OrderDetail;