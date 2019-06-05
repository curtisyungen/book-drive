import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: false,
        }
    }

    componentDidMount = () => {

    }

    filterBooks = () => {
        this.setState({
            filter: true,
        });
    }

    unfilterBooks = () => {
        this.setState({
            filter: false,
        });
    }

    render() {
        return (
            <div
                className="sidebar"
            >

                {/* SORTING OPTIONS */}
                <div id="sortingOptions">
                    <span className="title">Sort By</span><br/>

                    <ul>

                        {this.state.filter ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                }}
                            >
                                Show All Books
                            </li>  
                        ) : (
                            <></>
                        )}

                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.getAvailableBooks();
                                this.filterBooks();
                            }}
                        >
                            Available
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.getUnavailableBooks();
                                this.filterBooks();
                            }}
                        >
                            Unavailable
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.sortByTitle();
                            }}
                        >
                            Alphabetical by Title
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.sortByAuthor();
                            }}
                        >
                            Alphabetical by Author Last
                        </li>
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