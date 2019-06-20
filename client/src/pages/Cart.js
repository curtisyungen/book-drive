import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSummary from "../components/CartSummary/cartSummary";
import BookSuggestions from "../components/BookSuggestions/bookSuggestions";
import API from "../utils/API";
import "./Cart.css";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            cart: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {

        this.setState({
            user: this.props.user,
        });

        let email; 
        
        if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("user")) {
            email = JSON.parse(localStorage.getItem("user")).email;
            this.getBooksInCart(email);
        }
        else {
            this.getBooksInSessionStorage();
        }
    }

    getBooksInCart = (email) => {
        API.getBooksInCart(email)
          .then((res) => {
            this.setState({
              cart: res.data,
            }, () => {
                this.calculateSubtotal();
            });
          });
      }

    getBooksInSessionStorage = () => {
        let cart;

        if (sessionStorage.getItem("cart") && sessionStorage.getItem("cart") !== null) {
            cart = JSON.parse(sessionStorage.getItem("cart"));

            this.setState({
                cart: cart,
            }, () => {
                this.calculateSubtotal();
            });
        }
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
                    <thead>
                        <tr>
                            <th id="cartTitle">Shopping Cart</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
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
                            <tr><td>Your shopping cart is empty.</td></tr>
                        )}
                    </tbody>
                </table>

                <CartSummary 
                    user={this.state.user}
                    cart={this.state.cart}
                    subtotal={this.state.subtotal}
                    setRedirectToSignUp={this.props.setRedirectToSignUp}
                />

                <BookSuggestions 
                    displayClass="cart"
                />
            </div>
        )
    }
}

export default Cart;