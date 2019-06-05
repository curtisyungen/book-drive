import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";

library.add(faSearch);

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {/* SITE TITLE */}

                <a className="navbar-brand logo" href="/">congo</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* SEARCH BOX */}

                <form className="searchForm">
                    <input
                        className="searchBox"
                        placeholder="Search"
                        type="text"
                    />
                    <button
                        className="searchBtn"
                    >
                        <FontAwesomeIcon icon="search" />
                    </button>
                </form>

                {/* NAV MENU */}

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
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
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;