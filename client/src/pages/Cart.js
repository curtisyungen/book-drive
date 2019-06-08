import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSummary from "../components/CartSummary/cartSummary";
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {
        this.getCartFromLocalStorage();
        this.getSubtotal();
    }

    getCartFromLocalStorage = () => {
        let cart = JSON.parse(localStorage.getItem("cart"));

        this.setState({
            cart: cart,
        });
    }

    getSubtotal = () => {
        let books = this.state.cart;
        let subtotal = 0;

        for (var book in books) {
            subtotal += books[book].price;
        }

        this.setState({
            subtotal: subtotal,
        });
    }

    render() {
        return (
            <div
                className="cartContainer"
            >
                <h4>Shopping Cart</h4>

                {this.state.cart.length > 0 ? (
                    this.state.cart.map(book => (
                        <CartItem 
                            key={book.title}
                            title={book.title}
                            authorFirst={book.authorFirst}
                            authorLast={book.authorLast}
                            price={book.price}
                            imageURL={book.imageURL}
                            deleteFromCart={this.props.deleteFromCart}
                        />
                    ))
                ) : (
                    <div>Your shopping cart is empty.</div>
                )}

                <CartSummary 
                    subtotal={this.state.subtotal}
                />
            </div>
        )
    }
}

export default Cart;