import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSummary from "../components/CartSummary/cartSummary";
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [
                {
                    title: "Test",
                    author: "Test", 
                    price: 5,
                    avail: 0,
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SOM0kcgdL.jpg",
                },
            ],
            subtotal: 0,
        }
    }

    componentDidMount = () => {
        this.getSubtotal();
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