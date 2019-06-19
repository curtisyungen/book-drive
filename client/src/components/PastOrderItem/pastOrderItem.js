import React, { Component } from "react";
import "./pastOrderItem.css";

class PastOrderItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            authorFirst: null,
            authorLast: null,
            imageURL: null,
            price: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.title,
            authorFirst: this.props.authorFirst,
            authorLast: this.props.authorLast,
            imageURL: this.props.imageURL,
            price: this.props.price,
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <img className="orderCover" src={this.props.imageURL} alt="book image" />
            </div>

        )
    }
}

export default PastOrderItem;