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
            availFilter: null,
            formatFilter: null,
            subjectFilter: null,
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

    setAvailFilter = (filter) => {
        this.setState({
            availFilter: filter,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
        });
    }

    setFormatFilter = (filter) => {
        this.setState({
            formatFilter: filter,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
        });
    }

    setSubjectFilter = (filter) => {
        this.setState({
            subjectFilter: filter,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
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
                                    this.setAvailFilter("");
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
                                this.setAvailFilter("avail");
                            }}
                        >
                            Available
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "unavail"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setAvailFilter("unavail");
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
                                    this.setFormatFilter("");
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
                                this.setFormatFilter("soft");
                            }}
                        >
                            Paperback
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "hardcover"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setFormatFilter("hard");
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
                                    this.setSubjectFilter("");
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
                                this.setSubjectFilter("biography");
                            }}
                        >
                            Biography
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "business"}`}
                            onClick={(event) => {
                                event.preventDefault();;
                                this.setSubjectFilter("business");
                            }}
                        >
                            Business
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "economics"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("economics");
                            }}
                        >
                            Economics
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "fiction"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("fiction");
                            }}
                        >
                            Fiction
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "health"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("health");
                            }}
                        >
                            Health
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "history"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("history");
                            }}
                        >
                            History
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "humor"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("humor");
                            }}
                        >
                            Humor
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "leadership"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("leadership");
                            }}
                        >
                            Leadership
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "marketing"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("marketing");
                            }}
                        >
                            Marketing
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "money"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("money");
                            }}
                        >
                            Money/Investing
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "nonfict"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("nonfict");
                            }}
                        >
                            Non-fiction
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "philosophy"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("philosophy");
                            }}
                        >
                            Philosophy
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "political"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("political");
                            }}
                        >
                            Political
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "programming"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("programming");
                            }}
                        >
                            Programming
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "psychology"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("psychology");
                            }}
                        >
                            Psychology
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "speaking"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("speaking");
                            }}
                        >
                            Public Speaking
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "real estate"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("real estate");
                            }}
                        >
                            Real Estate
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "selfhelp"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("selfhelp");
                            }}
                        >
                            Self Help
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "selling"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("selling");
                            }}
                        >
                            Selling
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "sex"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("sex");
                            }}
                        >
                            Sex
                        </li>
                        <li
                            className={`option bold-${this.state.activeOption === "social"}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("social");
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