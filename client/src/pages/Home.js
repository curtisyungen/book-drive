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
        this.setState({
            books: this.props.books,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                books: this.props.books,
            });
        }
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
            />

                {/* BOOK LIST */}

                <div
                    className="bookList"    
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
                </div>
            </Container>
        )
    }

}

export default Home;