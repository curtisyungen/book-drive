import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            availFilter: null,
            formatFilter: null,
            subjectFilter: null,
        }
    }

    setAvailFilter = (filter) => {

        let filterFormat = true;
        if (filter !== "") {
            filterFormat = false;
        }

        this.setState({
            availFilter: filter,
            filterAvail: filterFormat,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
            this.props.setFilter("avail", filter);
        });
    }

    setFormatFilter = (filter) => {

        let filterFormat = true;
        if (filter !== "") {
            filterFormat = false;
        }

        this.setState({
            formatFilter: filter,
            filterFormat: filterFormat,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
            this.props.setFilter("format", filter);
        });
    }

    setSubjectFilter = (filter) => {

        let filterFormat = true;
        if (filter !== "") {
            filterFormat = false;
        }

        this.setState({
            subjectFilter: filter,
            filterSubject: filterFormat,
        }, () => {
            this.props.getFilteredBooks(this.state.availFilter, this.state.formatFilter, this.state.subjectFilter);
            this.props.setFilter("subject", filter);
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
                        {this.state.availFilter ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setAvailFilter(null);
                                    this.props.getAllBooks();
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

                        {this.state.formatFilter ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setFormatFilter(null);
                                    this.props.getAllBooks();
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
                        {this.state.subjectFilter ? (
                            <li
                                className="option"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setSubjectFilter(null);
                                    this.props.getAllBooks();
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