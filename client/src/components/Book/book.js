import React, { Component } from "react";
import Modal from "react-responsive-modal";
// import API from "../../utils/API";
import "./book.css";

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            author: null,
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
            author: this.props.author,
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

    render() {
        return (
            <span>
                <div
                    className="book"
                    onClick={this.openDetailView}
                >
                    <img className="bookCover" src={this.state.imageURL} alt="Book Cover" />
                </div>

                <Modal
                    open={this.state.openDetailView}
                    onClose={this.closeDetailView}
                    className="detailView"
                >
                    <img className="detailBookCover" src={this.state.imageURL} alt="Book Cover" />
                </Modal>
            </span> 
        )
    }

}

export default Book;