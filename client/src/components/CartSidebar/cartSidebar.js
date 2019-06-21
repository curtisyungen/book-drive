import React, { Component } from "react";
import CartSummary from "../CartSummary/cartSummary";
import BookSuggestions from "../BookSuggestions/bookSuggestions";
// import API from "../utils/API";
import "./cartSidebar.css";

class CartSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            cart: [],
            subtotal: 0,
        }
    }

    componentDidMount = () => {

        console.log("Cart Summary", this.props);

        this.setState({
            user: this.props.user,
        });

    }

    render() {
        return (
            <span>
                <CartSummary 
                    user={this.props.user}
                    cart={this.props.cart}
                    subtotal={this.props.subtotal}
                    setRedirectToSignUp={this.props.setRedirectToSignUp}
                />

                <BookSuggestions 
                    displayClass="cart"
                />
            </span>
        )
    }
}

export default CartSidebar;