import React, { Component } from "react";
import Container from "../components/Container/container";
import Book from "../components/Book/book";
import API from "../utils/API";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: null,
        }
    }

    componentDidMount = () => {

        this.getBooks();
        this.getCover();

        this.setState({
            books: [],
        });
    }

    getBooks = () => {
        API.getAllBooks()
            .then((res) => {
                this.setState({
                    books: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getCover = () => {
        API.getCoverByTitleAndAuthor("Speaker 2.0", "Atkinson")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Container>
                {this.state.books && this.state.books.length > 0 ? (
                    this.state.books.map(book => (
                        <Book
                            key={book.title + Math.random()}
                            title={book.title}
                            author={book.author}
                            price={book.price}
                            avail={book.avail}
                            tags={book.tags}
                            imageURL={book.imageURL}
                        />
                    ))
                ) : (
                        <div>No books found.</div>
                    )}
            </Container>
        )
    }

}

export default Home;