import React, { Component } from "react";
import Container from "../components/Container/container";
import allBooks from "../images/allBooks.jpg";
import fiftyBooks from "../images/fiftyBooks.JPG";
import robertGreene from "../images/robertGreene.JPG";
import cardoneBooks from "../images/cardoneBooks.PNG";
import daringGreatly from "../images/daringGreatly.jpg";
import dietCults from "../images/dietCults.JPG";
import earlyShelf from "../images/earlyShelf.JPG";
import "./Gallery.css";

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <Container>
                
                <div>
                    <img className="earlyShelf galleryImg" src={earlyShelf} alt="Early Shelf" />
                    <p className="caption">Early Shelf</p>
                </div>
                <div>
                    <img className="allBooks galleryImg" src={allBooks} alt="All Books" />
                    <p className="caption">The collection</p>
                </div>
                
                <div>
                    <img className="robertGreene galleryImg" src={robertGreene} alt="Robert Greene" />
                    <p className="caption">Robert Greene's books</p>
                </div>
                <div>
                    <img className="cardoneBooks galleryImg" src={cardoneBooks} alt="Grant Cardone" />
                    <p className="caption">Grant Cardone's books</p>

                    <img className="daringGreatly galleryImg" src={daringGreatly} alt="Daring Greatly" />
                    <p className="caption">Daring Greatly by Brene Brown</p>
                </div>
                <div>
                    <img className="dietCults galleryImg" src={dietCults} alt="Diet Cults" />
                    <p className="caption">Diet Cults</p>
                </div>
                <div>
                    <img className="fiftyBooks galleryImg" src={fiftyBooks} alt="Fifty Books" />
                    <p className="caption">Over fifty books read in 2016</p>
                </div>
            </Container>
        )
    }
}

export default Gallery;