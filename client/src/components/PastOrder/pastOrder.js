import React, { Component } from "react";
import "./pastOrder.css";

class PastOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            items: null,
            price: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            date: this.props.date,
            items: JSON.parse(this.props.items),
            price: this.props.price,
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="pastOrder">
                <p className="pastOrderHeader"></p>
                <img src="" alt="order image" />
            </div>
        )
    }
}

export default PastOrder;