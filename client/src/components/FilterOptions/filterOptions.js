import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./filterOptions.css";

library.add(faArrowLeft);

class FilterOptions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            availFilter: null,
            formatFilter: null,
            subjectFilter: null,
            showFiltersMenu: "hide",
            source: "sidebar",
        }
    }

    componentDidMount = () => {
        this.setState({
            showFiltersMenu: this.props.showFiltersMenu,
            source: this.props.source,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.showFiltersMenu !== this.props.showFiltersMenu) {
            this.setState({
                showFiltersMenu: this.props.showFiltersMenu,
                source: this.props.source,
            });
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
                className={`filterOptions-${this.state.source} filter-${this.state.showFiltersMenu}`}
            >

                {/* BACK TO MAIN MENU -- SLIDE IN ONLY */}

                {this.state.source === "slideIn" ? (
                    <div 
                        className="backToMainMenu"
                        onClick={this.props.toggleFiltersMenu}
                    >
                        <FontAwesomeIcon className="fa-1x" icon={faArrowLeft} />
                        &nbsp;MAIN MENU
                    </div>
                    ) : (
                        <></>
                )}

                {/* AVAILABILITY OPTIONS */}

                <div id="availabilityOptions">
                    <div className="title">Availability</div>
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
                            className={`option bold-${this.props.filterString.indexOf("Available") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setAvailFilter("avail");
                            }}
                        >
                            Available
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Unavailable") > -1}`}
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
                    <div className="title">Format</div>

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
                            className={`option bold-${this.props.filterString.indexOf("Paperback") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setFormatFilter("soft");
                            }}
                        >
                            Paperback
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Hardcover") > -1}`}
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
                    <div className="title">Subject/Genre</div>

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
                            className={`option bold-${this.props.filterString.indexOf("Biography") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("biography");
                            }}
                        >
                            Biography
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Business") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();;
                                this.setSubjectFilter("business");
                            }}
                        >
                            Business
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Economics") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("economics");
                            }}
                        >
                            Economics
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Fiction") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("fiction");
                            }}
                        >
                            Fiction
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Health") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("health");
                            }}
                        >
                            Health
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("History") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("history");
                            }}
                        >
                            History
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Humor") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("humor");
                            }}
                        >
                            Humor
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Leadership") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("leadership");
                            }}
                        >
                            Leadership
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Marketing") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("marketing");
                            }}
                        >
                            Marketing
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Money") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("money");
                            }}
                        >
                            Money/Investing
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Non-fiction") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("nonfict");
                            }}
                        >
                            Non-fiction
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Philosophy") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("philosophy");
                            }}
                        >
                            Philosophy
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Political") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("political");
                            }}
                        >
                            Political
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Programming") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("programming");
                            }}
                        >
                            Programming
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Psychology") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("psychology");
                            }}
                        >
                            Psychology
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Speaking") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("speaking");
                            }}
                        >
                            Public Speaking
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Real Estate") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("real estate");
                            }}
                        >
                            Real Estate
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Self-help") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("selfhelp");
                            }}
                        >
                            Self Help
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Selling") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("selling");
                            }}
                        >
                            Selling
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Sex") > -1}`}
                            onClick={(event) => {
                                event.preventDefault();
                                this.setSubjectFilter("sex");
                            }}
                        >
                            Sex
                        </li>
                        <li
                            className={`option bold-${this.props.filterString.indexOf("Social") > -1}`}
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

export default FilterOptions;