import React, { Component } from "react";
import Modal from "react-responsive-modal";
import API from "../../utils/API";
import "./book.css";

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            authorFirst: null,
            authorLast: null,
            price: null,
            avail: null,
            tags: [],
            imageURL: null,
            openDetailView: false
        }
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.title,
            authorFirst: this.props.authorFirst,
            authorLast: this.props.authorLast,
            price: this.props.price,
            avail: this.props.avail,
            tags: this.props.tags,
            imageURL: this.props.imageURL,
        });
    }

    openDetailView = () => {

        this.setState({
            openDetailView: true,
        });

        API.getBookByTitle(this.state.title)
            .then((res) => {
                console.log(res.data.items[0].volumeInfo.description);
                this.setState({
                    description: res.data.items[0].volumeInfo.description
                });
            });
    }

    closeDetailView = () => {
        this.setState({
            openDetailView: false,
        });
    }

    searchOnAmazon = (event) => {
        event.preventDefault();
        window.open(`https://www.amazon.com/s?k=${this.state.title}`)
    }

    addToCart = () => {
        let book = {
            title: this.state.title,
            authorFirst: this.state.authorFirst,
            authorLast: this.state.authorLast,
            price: this.state.price,
            imageURL: this.state.imageURL,
        }

        this.props.sendToCart(book);
    }

    render() {
        return (
            <span>
                <div
                    className="book"
                    onClick={(event) => {
                        event.preventDefault();
                        this.openDetailView();
                    }}
                >
                    <img className="bookCover" src={this.state.imageURL} alt={this.state.title} />
                </div>

                {/* <div className={`circle circle-${this.state.avail}`}></div> */}

                <Modal
                    open={this.state.openDetailView}
                    onClose={this.closeDetailView}
                    className="detailView"
                >

                    <div>
                        <img className="detailBookCover" src={this.state.imageURL} alt={this.state.title} />
                        
                        <span className="bookInfo">
                            <p className="bookTitle">{this.state.title}</p>
                            <span className="bookAuthor">by {this.state.authorFirst} {this.state.authorLast}</span>
                            <span className={`bookStatus book-${this.state.avail}`}>{this.state.avail === "avail" ? (`Available`):(`Unavailable`)}</span>
                            <p className="bookDescription">{this.state.description}</p>
                        </span>

                        <div id="buttons">
                            {this.state.avail === "avail" ? (
                                <button
                                    className="btn btn-warning btn-sm button"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.addToCart();
                                    }}
                                >
                                    Add to Cart
                            </button>
                            ) : (
                                    <></>
                                )}

                            <button
                                className="btn btn-success btn-sm button"
                                onClick={this.searchOnAmazon}
                            >
                                Amazon
                        </button>
                        </div>
                    </div>
                </Modal>
            </span>
        )
    }

}

export default Book;