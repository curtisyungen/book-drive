import React, { Component } from "react";
import SearchSuggestions from "../SearchSuggestions/searchSuggestions";
import API from "../../utils/API";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";

library.add(faSearch);

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
        this.getLoginStatus();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            this.getLoginStatus();
        }
    }

    getLoginStatus = () => {
        let isLoggedIn = localStorage.getItem("isLoggedIn");
        this.setState({
            isLoggedIn: isLoggedIn,
        });
    }
    
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        this.getSearchSuggestions();
    }

    getSearchSuggestions = () => {
        console.log(this.state.bookSearch);
        
        if (this.state.bookSearch.length > 0) {
            API.getSearchSuggestions(this.state.bookSearch)
                .then((res) => {
                    console.log("Get Suggestions", res);
                    this.setState({
                        suggestions: res.data,
                    }, () => {
                        this.showSearchSuggestions();
                    });
                });
        }
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

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
                            {this.state.isLoggedIn ? (
                                <div className="nav-link logout" onClick={this.props.logoutUser}>Logout</div>
                            ) : (
                                <a className="nav-link" href="/login">Login</a>
                            )}
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
