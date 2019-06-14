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
            showSearchSuggestions: false,
            suggestions: [],
        }
    }

    componentDidMount = () => {
        this.getUserFromLocalStorage();
        this.getLoginStatus();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn && !this.state.isLoggedIn) {
            this.getUserFromLocalStorage();
        }
    }

    getUserFromLocalStorage = () => {
        if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("user") !== null) {
            let user = JSON.parse(localStorage.getItem("user"));
            let firstName = user.name.split(" ", 1);

            this.setState({
                name: firstName,
                email: user.email,
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
            this.getSearchSuggestions(value);
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
        if (this.state.suggestions.length > 0) {
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
                    congo
                    {/* <img className="logo" src={require('../../images/congo.png')} alt="congo" /> */}
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        // onBlur={this.hideSearchSuggestions}
                        onFocus={this.handleInputChange}
                        value={this.bookSearch}
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

                    {this.state.showSearchSuggestions ? (
                        <SearchSuggestions
                            suggestions={this.state.suggestions}
                            chooseSearchSuggestion={this.chooseSearchSuggestion}
                        />
                    ) : (
                            <></>
                        )}
                </form>

                {/* NAV MENU */}

                <div className="">
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

                {/* NAVBAR ADVERT */}
                <div>
                    <p className="navbar-advert">Save 30% on men's skincare</p>
                </div>

                {/* ACCOUNT NAV MENU */}

                <div className="collapse navbar-collapse" id="navbarAcctMenu">
                    <ul className="navbar-nav">
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
                                        <div
                                            className="btn btn-warning btn-sm popupLoginBtn"
                                        >
                                            <a href="/login">Sign in</a>
                                        </div>

                                        <div className="popupNewCustomer">
                                            New customer?
                                            <a href="/signup">Start here.</a>
                                        </div>
                                        
                                    </Popup>
                                </span>
                        )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-acct-link" href="/">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-acct-link" href="/">Try SubPrime</a>
                        </li>
                        <li className="nav-item">
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
