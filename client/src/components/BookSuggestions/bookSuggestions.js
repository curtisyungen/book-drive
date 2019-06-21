import React, { Component } from "react";
import Book from "../Book/book";
import API from "../../utils/API";
import "./bookSuggestions.css";

class BookSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: null,
            displayClass: null,
        }
    }

    componentDidMount = () => {

        this.setState({
            displayClass: this.props.displayClass,
        });

        API.getBookSuggestions()
            .then((res) => {
                this.setState({
                    suggestions: res.data,
                });
            });
    }

    sendToCart = (book) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target["data-book"]);
        console.log(book);
        // let book = event.target.attr("data-book");
        // this.props.sendToCart(book);
    }

    render() {
        return (
            <div className={`bookSuggestionList-${this.state.displayClass}`}>

                <p className="suggestionHeader">More books:</p>

                {this.state.suggestions ? (
                    this.state.suggestions.map(book => (
                        <div className="bookSuggestion">
                            <img className="suggestionCover" src={book.imageURL} alt="book cover" />
                        
                            <span className="suggestionDetails">
                                <p className="suggestionTitle">{book.title}</p>
                                <p className="suggestionAuthor">{book.authorLast}, {book.authorFirst}</p>
                                <p className="suggestionPrice">${(Math.round(book.price * 100) / 100).toFixed(2)}</p>
                            
                                <button
                                    className="btn btn-warning btn-sm suggestionBtn"
                                    onClick={this.sendToCart.bind(null, book)}
                                    data-book={JSON.stringify(book)}
                                >
                                    Add to Cart
                                </button>
                            </span>  
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