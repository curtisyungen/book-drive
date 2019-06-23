import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterAvail: false,
            filterFormat: false,
            filterSubject: false,
            activeOption: null,
        }
    }

    filterBooks = (key) => {

        let filterAvail = false;
        let filterFormat = false;
        let filterSubject = false;

        if (key === "avail") {
            filterAvail = true;
        }

        if (key === "format") {
            filterFormat = true;
        }

        if (key === "subject") {
            filterSubject = true;
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

    setActiveOption = (key) => {
        this.setState({
            activeOption: key,
        }, () => {
            this.props.getActiveFilter(key);
        });
    }

    render() {
        return (
            <div
                className="sidebar"
            >
                {/* AVAILABILITY OPTIONS */}

                <div id="availabilityOptions">
                    <span className="title">Availability</span><br />
                    <ul>
                        {this.state.filterAvail ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                    this.setActiveOption(null);
                                }}
                            >
                                {`< All Books`}
                            </li>
                        ) : (
                            <></>
                        )}

                        <li
                            className={`option bold-${this.state.activeOption === "avail"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getAvailable("biography");
                                this.filterBooks("avail");
                                this.setActiveOption("avail");
                            }}
                        >
                            Available
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "unavail"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getUnavailableBooks();
                                this.filterBooks("avail");
                                this.setActiveOption("unavail");
                            }}
                        >
                            Unavailable
                        </li>
                    </ul>
                </div>

                {/* FORMAT OPTIONS */}
                <div id="formatOptions">
                    <span className="title">Format</span><br />

                    <ul>

                        {this.state.filterFormat ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                    this.setActiveOption(null);
                                }}
                            >
                                {`< All Formats`}
                            </li>
                        ) : (
                                <></>
                            )}

                        <li
                            className={`option bold-${this.state.activeOption === "paperback"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getPaperbacks();
                                this.filterBooks("format");
                                this.setActiveOption("paperback");
                            }}
                        >
                            Paperback
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "hardcover"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getHardcovers();
                                this.filterBooks("format");
                                this.setActiveOption("hardcover");
                            }}
                        >
                            Hardcover
                        </li>
                    </ul>
                </div>

                {/* SUBJECT OPTIONS */}
                <div id="subjectOptions">
                    <span className="title">Subject/Genre</span><br />

                    <ul>
                        {this.state.filterSubject ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.getAllBooks();
                                    this.unfilterBooks();
                                    this.setActiveOption(null);
                                }}
                            >
                                {`< All Subjects`}
                            </li>
                        ) : (
                                <></>
                            )}

                        <li
                            className={`option bold-${this.state.activeOption === "biography"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("biography");
                                this.filterBooks("subject");
                                this.setActiveOption("biography");
                            }}
                        >
                            Biography
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "business"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("business");
                                this.filterBooks("subject");
                                this.setActiveOption("business");
                            }}
                        >
                            Business
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "economics"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("economics");
                                this.filterBooks("subject");
                                this.setActiveOption("economics");
                            }}
                        >
                            Economics
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "fiction"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("fiction");
                                this.filterBooks("subject");
                                this.setActiveOption("fiction");
                            }}
                        >
                            Fiction
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "health"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("health");
                                this.filterBooks("subject");
                                this.setActiveOption("health");
                            }}
                        >
                            Health
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "history"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("history");
                                this.filterBooks("subject");
                                this.setActiveOption("history");
                            }}
                        >
                            History
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "humor"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("humor");
                                this.filterBooks("subject");
                                this.setActiveOption("humor");
                            }}
                        >
                            Humor
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "leadership"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("leadership");
                                this.filterBooks("subject");
                                this.setActiveOption("leadership");
                            }}
                        >
                            Leadership
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "marketing"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("market");
                                this.filterBooks("subject");
                                this.setActiveOption("marketing");
                            }}
                        >
                            Marketing
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "money"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("money");
                                this.filterBooks("subject");
                                this.setActiveOption("money");
                            }}
                        >
                            Money/Investing
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "nonfict"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("nonfict");
                                this.filterBooks("subject");
                                this.setActiveOption("nonfict");

                            }}
                        >
                            Non-fiction
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "philosophy"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("philosophy");
                                this.filterBooks("subject");
                                this.setActiveOption("philosophy");

                            }}
                        >
                            Philosophy
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "political"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("political");
                                this.filterBooks("subject");
                                this.setActiveOption("political");

                            }}
                        >
                            Political
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "programming"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("programming");
                                this.filterBooks("subject");
                                this.setActiveOption("programming");

                            }}
                        >
                            Programming
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "psychology"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("psychology");
                                this.filterBooks("subject");
                                this.setActiveOption("psychology");

                            }}
                        >
                            Psychology
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "speaking"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("speaking");
                                this.filterBooks("subject");
                                this.setActiveOption("speaking");

                            }}
                        >
                            Public Speaking
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "real estate"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("real estate");
                                this.filterBooks("subject");
                                this.setActiveOption("real estate");

                            }}
                        >
                            Real Estate
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "selfhelp"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("selfhelp");
                                this.filterBooks("subject");
                                this.setActiveOption("selfhelp");

                            }}
                        >
                            Self Help
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "selling"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("selling");
                                this.filterBooks("subject");
                                this.setActiveOption("selling");

                            }}
                        >
                            Selling
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "sex"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("sex");
                                this.filterBooks("subject");
                                this.setActiveOption("sex");

                            }}
                        >
                            Sex
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "social"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.getSubject("social");
                                this.filterBooks("subject");
                                this.setActiveOption("social");

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