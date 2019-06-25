import React, { Component } from "react";
import CartItem from "../components/CartItem/cartItem";
import CartSidebar from "../components/CartSidebar/cartSidebar";
import Footer from "../components/Footer/footer";
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

            this.setState({
                isLoggedIn: true,
            });

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
        });
    }

    render() {
        return (
            <span className="cart">
                <div className="cartContainer">
                    {this.props.cart && this.props.cart.length > 0 ? (
                        <div className="cartHeader">
                            <div id="cartTitleLabel">Shopping Cart</div>
                            <div id="cartPriceLabel">Price</div>
                        </div>
                    ) : (
                        <></>
                    )}

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
                            <div>
                                {this.state.isLoggedIn ? (
                                    <p className="cartIsEmpty">Your shopping cart is empty.</p>
                                ) : (
                                        <p className="cartIsEmptyNote">
                                            Your Shopping Cart lives to serve.
                                            Give it purpose — fill it with books about business, psychology, speaking, sales, and more.
                                            If you already have an account,&nbsp;
                                                <a href="/login">Sign In</a> to see your Cart.
                                            Continue shopping on the Congo.com homepage and explore our available books.
                                            The price and availability of items at Congo.com are subject to change.
                                            The Cart is a temporary place to store a list of your items and reflects each item's
                                            most recent price.
                                        </p>
                                    )}
                            </div>
                        )}
                </div>

                <CartSidebar
                    user={this.props.user}
                    cart={this.state.cart}
                    subtotal={this.state.subtotal}
                    setRedirectToSignUp={this.props.setRedirectToSignUp}
                    sendToCart={this.props.sendToCart}
                />

                <Footer />
            </span>
        )
    }
}

export default Cart;
