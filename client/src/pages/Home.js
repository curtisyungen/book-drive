import React, { Component } from "react";
import Container from "../components/Container/container";
import Book from "../components/Book/book";
import Sidebar from "../components/Sidebar/sidebar";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: null,
            message: "Loading...",
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
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                books: this.props.books,
            });
        }
    }

    checkScrollPos = () => {
        if (window.pageYOffset > 800) {
            this.showScrollToTopBtn();
        }
        else {
            this.hideScrollToTopBtn();
        }
    }

    showScrollToTopBtn = () => {
        this.setState({
            showScrollToTopBtn: true,
        });
    }

    hideScrollToTopBtn = () => {
        this.setState({
            showScrollToTopBtn: false,
        });
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
        this.hideScrollToTopBtn();
    }

    render() {
        return (
            <Container>

            <Sidebar 
                getAllBooks={this.props.getAllBooks}
                getAvailableBooks={this.props.getAvailableBooks}
                getUnavailableBooks={this.props.getUnavailableBooks}
                sortByTitle={this.props.sortByTitle}
                sortByAuthor={this.props.sortByAuthor}
                getPaperbacks={this.props.getPaperbacks}
                getHardcovers={this.props.getHardcovers}
                getSubject={this.props.getSubject}
            />

                {/* BOOK LIST */}

                <div
                    className="bookList"    
                    onWheel={this.checkScrollPos}
                >
                    {this.state.books && this.state.books.length > 0 ? (
                        this.state.books.map(book => (
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
                            />
                        ))
                    ) : (
                        <div>{this.state.message}</div>
                    )}

                    {this.state.showScrollToTopBtn ? (
                        <div
                            id="scrollToTopBtn"
                            onClick={this.scrollToTop}
                        >
                            Back to Top
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </Container>
        )
    }

}

export default Home;