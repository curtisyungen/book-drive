import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
            <Carousel 
                className="galleryImg" 
                autoPlay 
                dynamicHeight
                infiniteLoop
                stopOnHover
                showThumbs={false}
            >
                <div>
                    <img className="allBooks" src={allBooks} alt="All Books" />
                    <p className="legend">The collection</p>
                </div>
                <div>
                    <img className="fiftyBooks" src={fiftyBooks} alt="Fifty Books" />
                    <p className="legend">Over fifty books read in 2016</p>
                </div>
                <div>
                    <img className="robertGreene" src={robertGreene} alt="Robert Greene" />
                    <p className="legend">Robert Greene's books</p>
                </div>
                <div>
                    <img className="cardoneBooks" src={cardoneBooks} alt="Grant Cardone" />
                    <p className="legend">Grant Cardone's books</p>
                </div>
                <div>
                    <img className="daringGreatly" src={daringGreatly} alt="Daring Greatly" />
                    <p className="legend">Daring Greatly by Brene Brown</p>
                </div>
                <div>
                    <img className="dietCults" src={dietCults} alt="Diet Cults" />
                    <p className="legend">Diet Cults</p>
                </div>
                <div>
                    <img className="earlyShelf" src={earlyShelf} alt="Early Shelf" />
                    <p className="legend">Early Shelf</p>
                </div>
            </Carousel>
        )
    }
}

export default Gallery;