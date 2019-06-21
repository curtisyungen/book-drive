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

    sendToCart = (event) => {
        console.log(event.target.attr("data-book"));
        let book = event.target.attr("data-book");
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
                                    onClick={this.sendToCart}
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