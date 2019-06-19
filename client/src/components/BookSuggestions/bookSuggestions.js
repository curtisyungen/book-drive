import React, { Component } from "react";
import Book from "../Book/book";
import API from "../../utils/API";
import "./bookSuggestions.css";

class BookSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: null,
        }
    }

    componentDidMount = () => {
        API.getBookSuggestions()
            .then((res) => {

                // Get three random books
                let randIdx;
                let books = [];
                let bookList = res.data;
                console.log(bookList);

                for (var i=0; i<3; i++) {
                    randIdx = Math.random() * bookList.length;
                    books.push(bookList[randIdx]);
                    bookList.splice(randIdx);
                }

                this.setState({
                    suggestions: books,
                });
            });
    }

    render() {
        return (
            <div className="bookSuggestions">
                {this.state.suggestions ? (
                    this.state.suggestions.map(book => (
                        <Book 
                            title={book.title}
                            authorFirst={book.authorFirst}
                            authorLast={book.authorLast}
                            price={book.price}
                            avail={book.avail}
                            tags={book.tags}
                            imageURL={book.imageURL}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
        )
    }
}

export default BookSuggestions;