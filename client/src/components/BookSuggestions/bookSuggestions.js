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
                this.setState({
                    suggestions: res.data,
                });
            });
    }

    render() {
        return (
            <div className="bookSuggestionList">

                <p className="suggestionHeader">More books:</p>

                {this.state.suggestions ? (
                    this.state.suggestions.map(book => (
                        <div className="bookSuggestion">
                            <img className="suggestionCover" src={book.imageURL} alt="book cover" />
                        
                            <span className="suggestionDetails">
                                <p className="suggestionTitle">{book.title}</p>
                                <p className="suggestionAuthor">{book.authorLast}, {book.authorFirst}</p>
                                <p className="suggestionPrice">${(Math.round(book.price * 100) / 100).toFixed(2)}</p>
                            </span>

                            <button
                                className="btn btn-warning btn-sm suggestionBtn"
                            >
                                Add to Cart
                            </button>
                        
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        )
    }
}

export default BookSuggestions;