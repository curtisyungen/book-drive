import React, { Component } from "react";
import Container from "../components/Container/container";
import Book from "../components/Book/book";
// import API from "../utils/API";
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

        this.setState({
            books: [
                {
                    title: "Getting Everything You Can Out of All You've Got",
                    author: "Jay Abraham",
                    price: "0.00",
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SOM0kcgdL.jpg",
                    avail: true,
                    tags: ["red", "green"],
                },

                {
                    title: "Speaking Up Without Freaking Out",
                    author: "Matt Abrahams",
                    price: "0.00",
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51UhYXbDwkL._SX355_BO1,204,203,200_.jpg",
                    avail: true,
                    tags: ["red", "green"],
                },

                {
                    title: "The Wall Street MBA",
                    author: "Reuben Advani",
                    price: "0.00",
                    imageURL: "https://s3-ap-southeast-1.amazonaws.com/mph-images/9780071788311_b.jpg",
                    avail: true,
                    tags: ["red", "green"],
                }
            ],
        });
    }

    getBooks = () => {
        // API.getAllBooks()
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    render() {
        return (
            <Container>
                {this.state.books && this.state.books.length > 0 ? (
                    this.state.books.map(book => (
                        <Book
                            key={book.title}
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