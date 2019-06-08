import React, { Component } from "react";
import "./cartItem.css";

class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div 
                className="cartItem"
            >
                <img className="cartCover" src={this.props.imageURL} alt={this.props.title} />

                <a href="/" className="cartTitle">
                    {this.props.title}
                </a>

                <span className="cartAuthor">
                    {` by ${this.props.authorFirst} ${this.props.authorLast}`}
                </span>

                <span className="cartPrice">
                    {this.props.price}
                </span>
            </div>
        )
    }
}

export default CartItem;
