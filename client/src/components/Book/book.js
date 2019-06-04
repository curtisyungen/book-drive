import React, { Component } from "react";
import Modal from "react-responsive-modal";
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

    render() {
        return (
            <span>
                <div
                    className="book"
                    onClick={this.openDetailView}
                >
                    <img className="bookCover" src={this.state.imageURL} alt={this.state.title} />
                </div>

                <Modal
                    open={this.state.openDetailView}
                    onClose={this.closeDetailView}
                    className="detailView"
                >
                    <img className="detailBookCover" src={this.state.imageURL} alt={this.state.title} />

                    <div id="buttons">
                        {this.state.avail ? (
                            <button
                                className="btn btn-primary btn-sm button"
                            >
                                Take
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
                </Modal>
            </span> 
        )
    }

}

export default Book;