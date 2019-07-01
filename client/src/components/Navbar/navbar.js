import React, { Component } from "react";
import Popup from "reactjs-popup";
import SearchSuggestions from "../SearchSuggestions/searchSuggestions";
import API from "../../utils/API";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";

library.add(faSearch, faShoppingCart);

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookSearch: "",
            isLoggedIn: false,
            name: "Sign in",
            email: "",
            cart: null,
            showSearchSuggestions: false,
            suggestions: [],
            scrollPosition: 0,
        }
    }

    componentDidMount = () => {
        this.getUserFromLocalStorage();
        this.getLoginStatus();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn && !this.state.isLoggedIn) {
            this.getUserFromLocalStorage();
        }

        this.getBooksInCart(this.state.email);

        console.log("Update", this.state);
    }

    getBooksInCart = (email) => {
        // Get books in guest cart from session storage
        if (!this.props.isLoggedIn) {
          let cart;
          if (sessionStorage.getItem("cart") && sessionStorage.getItem("cart") !== null) {
            cart = (sessionStorage.getItem("cart"));
    
            this.setState({
              cart: cart,
            });
          }
        }
    
        // Get books in logged in user's cart from database
        else {
          API.getBooksInCart(email)
          .then((res) => {
            this.setState({
              cart: res.data,
            });
          });
        }
      }

    getUserFromLocalStorage = () => {
        if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("user") !== null) {
            let user = JSON.parse(localStorage.getItem("user"));

            this.setState({
                name: user.name.split(" ", 1),
                email: user.email,
            }, () => {
                this.getBooksInCart(this.state.email);
            });
        }
        else {
            this.setState({
                name: "Sign in",
                email: "",
            });
        }
    }

    getLoginStatus = () => {
        if (localStorage.getItem("isLoggedIn")) {
            return localStorage.getItem("isLoggedIn") === "true";
        }
        return false;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        }, () => {
            if (this.state.bookSearch === null || this.state.bookSearch === "") {
                this.hideSearchSuggestions();
            }
            else {
                this.getSearchSuggestions(value);
            }
        });
    }

    getSearchSuggestions = (bookSearch) => {
        API.getSearchSuggestions(bookSearch)
            .then((res) => {
                this.setState({
                    suggestions: res.data,
                }, () => {
                    this.showSearchSuggestions();
                });
            });
    }

    showSearchSuggestions = () => {
        let suggestions = this.state.suggestions;
        if (this.state.suggestions.length > 0 && suggestions.constructor === Array) {
            this.setState({
                showSearchSuggestions: true,
            });
        }
    }

    hideSearchSuggestions = () => {
        this.setState({
            showSearchSuggestions: false,
        });
    }

    chooseSearchSuggestion = (suggestion) => {
        this.setState({
            bookSearch: suggestion,
        }, () => {
            this.props.searchForBook(suggestion);
            this.hideSearchSuggestions();
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {/* SITE TITLE */}

                <a className="navbar-brand" href="/">
                    <img className="logo" src={require('../../images/congo2.png')} alt="congo" />
                </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={this.props.showSlideInMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* SEARCH BOX */}

                <form className="searchForm">
                    <input
                        autoComplete="off"
                        className="searchBox"
                        placeholder="Search Title or Author"
                        type="text"
                        name="bookSearch"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputChange}
                        value={this.state.bookSearch}
                    />
                    <button
                        className="searchBtn"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.searchForBook(this.state.bookSearch);
                            this.hideSearchSuggestions();
                        }}
                    >
                        <FontAwesomeIcon icon="search" />
                    </button>

                    {/* SEARCH SUGGESTIONS */}

                    {this.state.showSearchSuggestions && this.state.suggestions.constructor === Array && this.state.suggestions.length > 0 ? (
                        <SearchSuggestions
                            suggestions={this.state.suggestions}
                            chooseSearchSuggestion={this.chooseSearchSuggestion}
                            hideSearchSuggestions={this.hideSearchSuggestions}
                        />
                    ) : (
                            <></>
                    )}
                </form>

                {/* NAV MENU */}

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id="navbarMenu">
                        <li className="nav-item">
                            <a className="nav-menu-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-menu-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-menu-link" href="/gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-menu-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* NAVBAR DISCLAIMER */}
                <a className="navbar-disclaimer" href="/about">This site is not affiliated with Amazon.com.</a>

                {/* ACCOUNT NAV MENU */}

                <div id="navbarAcctMenu">
                    <ul className="navbarAcctMenuList">
                        <li className="nav-item">
                            {this.getLoginStatus() ? (
                                <span>
                                    {/* LOGGED IN: ACCOUNT & LISTS POPUP */}

                                    <Popup
                                        trigger={
                                            <a className="nav-acct-link accountLink" href="/">
                                                <span className="helloUser">Hello, {this.state.name}</span>
                                                {`Account & Lists`}
                                            </a>}
                                        on="hover"
                                        position="bottom right"
                                        closeOnDocumentClick
                                        className="popup"
                                    >
                                        <div
                                            className="signoutBtn"
                                            onClick={this.props.logoutUser}
                                        >
                                            Sign out
                                        </div>
                                    </Popup>
                                </span>
                            ) : (
                                <span>
                                    {/* LOGGED OUT: ACCOUNT & LISTS POPUP */ }

                                    <Popup
                                        trigger={
                                            <a className="nav-acct-link accountLink" href="/login">
                                                <span className="helloUser">Hello, {this.state.name}</span>
                                                {`Account & Lists`}
                                            </a>}
                                        on="hover"
                                        position="bottom right"
                                        closeOnDocumentClick
                                        className="popup"
                                    >
                                        <a
                                            className="btn btn-warning btn-sm popupLoginBtn"
                                            href="/login"
                                        >
                                            Sign in
                                        </a>

                                        <div className="popupNewCustomer">
                                            New customer?
                                            <a href="/signup">Start here.</a>
                                        </div>
                                        
                                    </Popup>
                                </span>
                        )}
                        </li>
                        <li className="nav-item">
                            {this.getLoginStatus() ? (
                                <a className="nav-acct-link" href="/orders">Orders</a>
                            ) : (
                                <a className="nav-acct-link" href="/login">Orders</a>
                            )}                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-acct-link" href="https://www.primoseattle.com/" target="_blank" rel="noopener noreferrer">Try Primo</a>
                        </li>
                        <li className="nav-item">
                            <span className="cartQty">{this.state.cart ? (this.state.cart.length):(0)}</span>
                            <a className="nav-acct-link cartLink" href="/cart">
                                <FontAwesomeIcon className="fa-2x shoppingCart" icon="shopping-cart" />
                                &nbsp;Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
