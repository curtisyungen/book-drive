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
        this.setState({
            cart: this.props.cart,
        }, () => {
            console.log(this.state);
        });

        this.calculateSubtotal();
    }

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
                <table
                    className="cartTable"    
                >   
                    <tr>
                        <th id="cartTitle">Shopping Cart</th>
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