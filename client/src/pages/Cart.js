import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSummary from "../components/CartSummary/cartSummary";
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [
                {
                    title: "Test Book",
                    authorFirst: "Test",
                    authorLast: "Book",
                    price: 5.00,
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51EVY74TMDL._SX331_BO1,204,203,200_.jpg",
                },
                {
                    title: "Test Book",
                    authorFirst: "Test",
                    authorLast: "Book",
                    price: 5.00,
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51EVY74TMDL._SX331_BO1,204,203,200_.jpg",
                },
            ],
            subtotal: 0,
        }
    }

    componentDidMount = () => {
        // this.loadCartFromLocalStorage();
        this.calculateSubtotal();
    }

    // loadCartFromLocalStorage = () => {
    //     let cart;
    //     if (localStorage.getItem("cart")) {
    //         cart = JSON.parse(localStorage.getItem("cart"));
    //     }

    //     this.setState({
    //         cart: cart,
    //     }, () => {
    //         this.calculateSubtotal();
    //     });
    // }

    calculateSubtotal = () => {
        let cart = this.state.cart;
        let subtotal = 0;

        for (var book in cart) {
            subtotal += cart[book].price;
        }

        this.setState({
            subtotal: subtotal,
        }, () => {
            console.log("Subtotal", this.state.subtotal);
        });
    }

    render() {
        return (
            <div
                className="cartContainer"
            >
                <h4>Shopping Cart</h4>

                <table
                    className="cartTable"    
                >
                    <tr>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>

                    {this.state.cart && this.state.cart.length > 0 ? (
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
                </table>

                <CartSummary 
                    cart={this.state.cart}
                    subtotal={this.state.subtotal}
                />
            </div>
        )
    }
}

export default Cart;