import React, { Component } from "react";
import Container from "../components/Container/container";
import Book from "../components/Book/book";
import Sidebar from "../components/Sidebar/sidebar";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [
                // {
                //     title: "Test",
                //     author: "Test", 
                //     price: "0.00",
                //     avail: 0,
                //     imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SOM0kcgdL.jpg",
                // },
                // {
                //     title: "Test",
                //     author: "Test", 
                //     price: "0.00",
                //     avail: 0,
                //     imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SOM0kcgdL.jpg",
                // },
                // {
                //     title: "Test",
                //     author: "Test", 
                //     price: "0.00",
                //     avail: 0,
                //     imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SOM0kcgdL.jpg",
                // }
            ],
            message: "Loading...",
            activeFilter: null,
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
        if (window.pageYOffset > 600) {
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
      
    getActiveFilter = (key) => {
        this.setState({
            activeFilter: key,
        });
    }

    render() {
        return (
            <Container>

            {/* RESULTS SUMMARY */}

            <div
                className="resultsSummary"
            >
                <span>
                    {this.state.books.length} results for:{this.state.activeFilter}
                </span>
            </div>

            <Sidebar 
                getAllBooks={this.props.getAllBooks}
                getAvailableBooks={this.props.getAvailableBooks}
                getUnavailableBooks={this.props.getUnavailableBooks}
                sortByTitle={this.props.sortByTitle}
                sortByAuthor={this.props.sortByAuthor}
                getPaperbacks={this.props.getPaperbacks}
                getHardcovers={this.props.getHardcovers}
                getSubject={this.props.getSubject}
                getActiveFilter={this.getActiveFilter}
            />
                {/* BOOK LIST */}

                <div
                    className="bookList"    
                    onScroll={this.checkScrollPos}
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