import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSummary from "../components/CartSummary/cartSummary";
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {
        this.setState({
            books: this.props.cart,
        }, () => {
            this.getSubtotal();
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                books: this.props.cart,
            }, () => {
                console.log(this.state.books);
            });
        }
    }

    getSubtotal = () => {
        let books = this.state.books;
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

                {this.state.books.length > 0 ? (
                    this.state.books.map(book => (
                        <CartItem 
                            key={book.title}
                            title={book.title}
                            author={book.author}
                            price={book.price}
                            imageURL={book.imageURL}
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