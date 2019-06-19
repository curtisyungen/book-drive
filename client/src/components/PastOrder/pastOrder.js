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
            items: this.props.items,
            price: this.props.price,
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <></>
        )
    }
}

export default PastOrder;