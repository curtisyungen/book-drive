import React, { Component } from "react";
import Book from "../components/Book/book";
import Sidebar from "../components/Sidebar/sidebar";
import Footer from "../components/Footer/footer";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [
                {
                    title: "Testing a Very Long Book Title Like This One",
                    authorFirst: "Test",
                    authorLast: "Test",
                    cover: "hard",
                    price: 0.00,
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/61Lc9Qd0vgL.jpg",
                }
            ],
            message: "Loading...",
            userSearch: "",
            sortOption: "",
            activeFilter: false,
            availFilter: null,
            formatFilter: null,
            subjectFilter: null,
            filterString: null,
        }
    }

    componentDidMount = () => {

        let message = "";

        if (this.props.books.length === 0) {
            message = "No books found.";
        }

        this.setState({
            books: this.props.books,
            message: message,
            userSearch: this.props.userSearch,
            sortOption: "",
        });

        this.props.updateParentState();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                books: this.props.books,
                userSearch: this.props.userSearch,
            });
        }
    }

    setFilter = (key, filter) => {
        if (key === "avail") {
            this.setAvailFilter(filter);
        }
        else if (key === "format") {
            this.setFormatFilter(filter);
        }
        else if (key === "subject") {
            this.setSubjectFilter(filter);
        }
    }

    setAvailFilter = (filter) => {
        if (filter === "avail") {
            filter = "Available";
        }
        else if (filter === "unavail") {
            filter = "Unavailable";
        }
        else {
            filter = null;
        }

        this.setState({
            availFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setFormatFilter = (filter) => {
        if (filter === "soft") {
            filter = "Paperback";
        }
        else if (filter === "hard") {
            filter = "Hardcover";
        }
        else {
            filter = null;
        }

        this.setState({
            formatFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setSubjectFilter = (filter) => {
        switch (filter) {
            case "nonfict": filter = "Non-fiction"; break;
            case "real estate": filter = "Real Estate"; break;
            case "social": filter = "Social Skills"; break;
            case "speaking": filter = "Public Speaking"; break;
            case "money": filter = "Money/Investing"; break;
            case "": filter = ""; break;
            case null: filter = null; break;
            default: filter = filter.charAt(0).toUpperCase() + filter.substr(1);
        }

        this.setState({
            subjectFilter: filter,
            activeFilter: true,
        }, () => {
            this.setFilterString();
        });
    }

    setFilterString = () => {
        let filterString = "";
        let filters = [];

        if (this.state.availFilter) {
            filters.push(this.state.availFilter);
        }
        if (this.state.formatFilter) {
            filters.push(this.state.formatFilter);
        }
        if (this.state.subjectFilter) {
            filters.push(this.state.subjectFilter);
        }

        filterString = filters.join(" : ");

        this.setState({
            filterString: filterString,
        });
    }

    handleSortOption = (event) => {
        this.setState({
            sortOption: event.target.value,
        }, () => {
            if (this.state.sortOption === "title") {
                this.sortByTitle();
            }
            else if (this.state.sortOption === "author") {
                this.sortByAuthor();
            }
        });
    }

    sortByTitle = () => {
        let books = this.state.books;

        books.sort(this.compareTitle);

        this.setState({
            books: books,
        });
    }

    compareTitle = (a, b) => {
        if (a.title === b.title) {
            return 0;
        }
        else {
            return (a.title < b.title) ? -1 : 1;
        }
    }

    sortByAuthor = () => {
        let books = this.state.books;

        books.sort(this.compareAuthor);

        this.setState({
            books: books,
        });
    }

    compareAuthor = (a, b) => {
        if (a.authorLast === b.authorLast) {
            return 0;
        }
        else {
            return (a.authorLast < b.authorLast) ? -1 : 1;
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <span>
                <div className="content">

                    {/* RESULTS SUMMARY */}

                    <div
                        className="resultsSummary"
                    >
                        <span>
                            {this.state.books.length}
                            &nbsp;results&nbsp;
                            {this.state.activeFilter ? (
                                this.state.filterString
                            ) : (
                                null
                            )}
                        </span>

                        <select
                            className="sortBy"
                            onChange={this.handleSortOption}
                            value={this.state.sortOption}
                        >
                            <option value="" disabled selected>Sort by:</option>
                            <option value="title">Alpabetical by Title</option>
                            <option value="author">Alpabetical by Author Last</option>
                        </select>
                    </div>

                    {/* BACK TO TOP BUTTON */}

                    {/* <div>
                        <button
                            className="btn btn-light btn-sm scrollToTopHomeBtn"
                            onClick={this.scrollToTop}
                        >
                            Back to top
                        </button>
                    </div> */}

                    {/* SIDE BAR */}

                    <Sidebar
                        getAllBooks={this.props.getAllBooks}
                        setActiveFilter={this.setActiveFilter}
                        setFilter={this.setFilter}
                        getFilteredBooks={this.props.getFilteredBooks}
                    />

                    {/* BOOK LIST */}

                    <div
                        className="bookList"
                    >
                        {this.state.books && this.state.books.length > 0 ? (

                            <span>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book.title + Math.random()}
                                        title={book.title}
                                        authorFirst={book.authorFirst}
                                        authorLast={book.authorLast}
                                        price={book.price}
                                        avail={book.avail}
                                        cover={book.cover}
                                        condition={book.condition}
                                        imageURL={book.imageURL}
                                        tags={book.tags}
                                        sendToCart={this.props.sendToCart}
                                    />
                                ))}
                            </span>
                        ) : (
                                <div>{this.state.message}</div>
                            )}
                    </div>


                </div>

                <Footer />
            </span>
        )
    }
}

export default Home;