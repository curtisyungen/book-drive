import React, { Component } from "react";
import Book from "../Book/book";
import API from "../../utils/API";
import "./bookSuggestions.css";

class BookSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [{
                title: "The Old Man and the Sea",
                authorFirst: "Ernest",
                authorLast: "Hemingway",
                price: "5.00",
                avail: "avail",
                cover: "soft",
                tags: "fiction",
                imageURL: "https://images-na.ssl-images-amazon.com/images/I/61Lc9Qd0vgL.jpg",
            }],
            displayClass: null,
        }
    }

    componentDidMount = () => {

        this.setState({
            displayClass: this.props.displayClass,
        });

        // API.getBookSuggestions()
        //     .then((res) => {
        //         this.setState({
        //             suggestions: res.data,
        //         });
        //     });
    }

    sendToCart = (book) => {
        this.props.sendToCart(book);
    }

    render() {
        return (
            <div className={`bookSuggestionList-${this.state.displayClass}`}>

                <p className="suggestionHeader">More books:</p>

                {this.state.suggestions ? (
                    this.state.suggestions.map(book => (
                        <div className="bookSuggestion">

                            <Book 
                                title={book.title}
                                authorFirst={book.authorFirst}
                                authorLast={book.authorLast}
                                price={book.price}
                                avail={book.avail}
                                cover={book.cover}
                                tags={book.tags}
                                imageURL={book.imageURL}
                                displayType="suggestion"
                            />
                            
                            {/* <img className="suggestionCover" src={book.imageURL} alt="book cover" /> */}
                        
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