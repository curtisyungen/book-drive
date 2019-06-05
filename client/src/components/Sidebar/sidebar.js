import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div
                className="sidebar"
            >

                {/* SEARCH BOX */}

                <form className="searchForm">
                    <input 
                        className="searchBox"
                        placeholder="Search"
                        type="text"
                    />
                </form>

                {/* SORTING OPTIONS */}
                <div id="sortingOptions">
                    <span className="title">Sort By</span><br/>

                    <ul>
                        <li className="option">Available</li>
                        <li className="option">Unavailable</li>
                        <li className="option">Alphabetical by Title</li>
                        <li className="option">Alphabetical by Author Last</li>
                    </ul>
                </div>

                {/* FORMAT OPTIONS */}
                <div id="formatOptions">
                    <span className="title">Format</span><br/>

                    <ul>
                        <li className="option">Small Icons</li>
                        <li className="option">Large Icons</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar;