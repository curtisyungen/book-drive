import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterAvail: false,
            filterFormat: false,
            filterSubject: false,
        }
    }

    componentDidMount = () => {

    }

    filterBooks = (key) => {
        if (key === "avail") {
            this.setState({
                filterAvail: true,
            });
        }
        if (key === "format") {
            this.setState({
                filterFormat: true,
            });
        }
        if (key === "subject") {
            this.setState({
                filterSubject: true,
            });
        }
    }

    unfilterBooks = (key) => {
        if (key === "avail") {
            this.setState({
                filterAvail: false,
            });
        }
        if (key === "format") {
            this.setState({
                filterFormat: false,
            });
        }
        if (key === "subject") {
            this.setState({
                filterSubject: false,
            });
        }
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

                        {this.state.filterAvail ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks("avail");
                                }}
                            >
                                All Books
                            </li>  
                        ) : (
                            <></>
                        )}

                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.getAvailableBooks();
                                this.filterBooks("avail");
                            }}
                        >
                            Available
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault(); 
                                this.props.getUnavailableBooks();
                                this.filterBooks("avail");
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

                        {this.state.filterFormat ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks("format");
                                }}
                            >
                                All Formats
                            </li>  
                        ) : (
                            <></>
                        )}

                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getPaperbacks();
                                this.filterBooks("format");
                            }}
                        >
                            Paperback
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getHardcovers();
                                this.filterBooks("format");
                            }}
                        >
                            Hardcover
                        </li>
                    </ul>
                </div>

                {/* SUBJECT OPTIONS */}
                <div id="subjectOptions">
                    <ul>
                        {this.state.filterSubject ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks("subject");
                                }}
                            >
                                All Subjects
                            </li>  
                        ) : (
                            <></>
                        )}

                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("business");
                                this.filterBooks("subject");
                            }}
                        >
                            Business
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("psychology");
                                this.filterBooks("subject");
                            }}
                        >
                            Psychology
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("health");
                                this.filterBooks("subject");
                            }}
                        >
                            Health
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("philosophy");
                                this.filterBooks("subject");
                            }}
                        >
                            Philosophy
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("sex");
                                this.filterBooks("subject");
                            }}
                        >
                            Sex
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("fiction");
                                this.filterBooks("subject");
                            }}
                        >
                            Fiction
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("money");
                                this.filterBooks("subject");
                            }}
                        >
                            Money
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar;