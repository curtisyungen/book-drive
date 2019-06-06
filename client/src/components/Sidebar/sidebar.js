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

        let filterAvail = false;
        let filterFormat = false;
        let filterSubject = false;

        switch (key) {
            case "avail": filterAvail = true; break;
            case "format": filterFormat = true; break;
            case "subject": filterSubject = true; break;
            default: ""; 
        }

        this.setState({
            filterAvail: filterAvail,
            filterFormat: filterFormat,
            filterSubject: filterSubject,
        });
    }

    unfilterBooks = () => {
        this.setState({
            filterAvail: false,
            filterFormat: false,
            filterSubject: false,
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

                        {this.state.filterAvail ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                }}
                            >
                                {`< All Books`}
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
                                    this.unfilterBooks();
                                }}
                            >
                                {`< All Formats`}
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
                    <span className="title">Subject</span><br/>

                    <ul>
                        {this.state.filterSubject ? (
                            <li 
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                }}
                            >
                                {`< All Subjects`}
                            </li>  
                        ) : (
                            <></>
                        )}
                     
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("biography");
                                this.filterBooks("subject");
                            }}
                        >
                            Biography
                        </li>
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
                                this.props.getSubject("fiction");
                                this.filterBooks("subject");
                            }}
                        >
                            Economics
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
                                this.props.getSubject("history");
                                this.filterBooks("subject");
                            }}
                        >
                            History
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("humor");
                                this.filterBooks("subject");
                            }}
                        >
                            Humor
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("leadership");
                                this.filterBooks("subject");
                            }}
                        >
                            Leadership
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("market");
                                this.filterBooks("subject");
                            }}
                        >
                            Marketing
                        </li>
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("money");
                                this.filterBooks("subject");
                            }}
                        >
                            Money/Investing
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
                                this.props.getSubject("political");
                                this.filterBooks("subject");
                            }}
                        >
                            Political
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
                                this.props.getSubject("speaking");
                                this.filterBooks("subject");
                            }}
                        >
                            Public Speaking
                        </li>  
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("real estate");
                                this.filterBooks("subject");
                            }}
                        >
                            Real Estate
                        </li> 
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("selfhelp");
                                this.filterBooks("subject");
                            }}
                        >
                            Self Help
                        </li> 
                        <li 
                            className="option"
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("selling");
                                this.filterBooks("subject");
                            }}
                        >
                            Selling
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
                                this.props.getSubject("social");
                                this.filterBooks("subject");
                            }}
                        >
                            Social Skills
                        </li>                   
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar;