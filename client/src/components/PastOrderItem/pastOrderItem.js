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
            <span>
                <h4>Ordered on: {this.props.date}</h4>
                <div className="pastOrderItem">
                    <img className="orderCover" src={this.props.imageURL} alt="book cover" />
                    <span className="orderDetails">
                        <a className="orderTitle" href="/">{this.props.title}</a>
                        <p className="orderAuthor">{this.props.authorLast}, {this.props.authorFirst}</p>
                        <p className="orderPrice">{Math.round((this.props.price * 100) / 100).toFixed(2)}</p>
                    </span>
                </div>
            </span>
        )
    }
}

export default PastOrderItem;