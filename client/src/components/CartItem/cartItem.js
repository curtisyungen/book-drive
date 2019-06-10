import React, { Component } from "react";
import "./cartItem.css";

class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            authorFirst: "",
            authorLast: "",
            price: "",
            imageURL: "",
        }
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.title,
            authorFirst: this.props.authorFirst,
            authorLast: this.props.authorLast,
            price: this.props.price,
            imageURL: this.props.imageURL,
        });
    }

    removeFromCart = () => {
        let book = {
            title: this.state.title,
            authorFirst: this.state.authorFirst,
            authorLast: this.state.authorLast
        }

        this.props.deleteFromCart(book);
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

                <div 
                    className="deleteFromCart" 
                    onClick={this.removeFromCart}
                >
                    Delete
                </div>
            </div>
        )
    }
}

export default CartItem;
