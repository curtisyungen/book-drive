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
            <div
                className="cartItem"
            >
                <div className="cartItemInfo">
                    <img className="cartCover" src={this.props.imageURL} alt={this.props.title} />
                    <div className="cartTitleAndAuthor">
                        <a href="/" className="cartTitle">
                            {this.props.title}
                        </a>
                        <div className="cartAuthor">
                            &nbsp;{` by ${this.props.authorFirst} ${this.props.authorLast}`}
                        </div>
                        <div
                            className="deleteFromCart"
                            onClick={this.removeFromCart}
                        >
                            Delete
                        </div>
                    </div>
                    
                </div>

                <div className="cartPrice">
                    {`$${parseFloat(Math.round(this.props.price * 100) / 100).toFixed(2)}`}
                </div>
            </div>
        )
    }
}

export default CartItem;
