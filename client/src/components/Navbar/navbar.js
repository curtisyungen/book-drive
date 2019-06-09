import React, { Component } from "react";
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
            showSearchSuggestions: false,
            suggestions: ["none"],
        }
    }

    componentDidMount = () => {
        console.log(this.props);
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
                        onBlur={this.hideSearchSuggestions}
                        onFocus={this.handleInputChange}
                        value={this.bookSearch}
                    />
                    <button
                        className="searchBtn"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.searchForBook(this.state.bookSearch);
                        }}
                    >
                        <FontAwesomeIcon icon="search" />
                    </button>
                    
                    {/* SEARCH SUGGESTIONS */}

                    {this.state.showSearchSuggestions ? (
                        <SearchSuggestions 
                            suggestions={this.state.suggestions}
                        />
                    ) : (
                        <></>
                    )}
                </form>

                {/* NAV MENU */}

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            {this.props.isLoggedIn ? (
                                <div className="nav-link logout" onClick={this.props.logoutUser}>Logout</div>
                            ) : (
                                <a className="nav-link" href="/login">Login</a>
                            )}
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <FontAwesomeIcon className="fa-2x shoppingCart" icon="shopping-cart" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
