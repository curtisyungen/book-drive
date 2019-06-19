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

        let tag = "business";

        API.getBookSuggestions()
            .then((res) => {
                this.setState({
                    suggestions: res.data,
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