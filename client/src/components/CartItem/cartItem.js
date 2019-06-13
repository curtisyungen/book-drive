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
            title: this.props.title,
            authorFirst: this.props.authorFirst,
            authorLast: this.props.authorLast
        }

        this.props.deleteFromCart(book);
    }

    render() {
        return (
            <tr
                className="cartItem"
            >
                <td>
                    <img className="cartCover" src={this.props.imageURL} alt={this.props.title} />
                    <a href="/" className="cartTitle">
                        {this.props.title}
                    </a>
                    <span className="cartAuthor">
                        {` by ${this.props.authorFirst} ${this.props.authorLast}`}
                    </span>
                    <div
                        className="deleteFromCart"
                        onClick={this.removeFromCart}
                    >
                        Delete
                </div>
                </td>

                <td className="cartPrice">
                    {`$${parseFloat(Math.round(this.props.price * 100) / 100).toFixed(2)}`}
                </td>

                <td className="cartQuantity">
                    1
                </td>
            </tr>
        )
    }
}

export default CartItem;
