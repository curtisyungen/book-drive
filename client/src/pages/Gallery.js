import React, { Component } from "react";
import Footer from "../components/Footer/footer";
import allBooks from "../images/allBooks.jpg";
import fiftyBooks from "../images/fiftyBooks.JPG";
import robertGreene from "../images/robertGreene.JPG";
import cardoneBooks from "../images/cardoneBooks.PNG";
import daringGreatly from "../images/daringGreatly.jpg";
import dietCults from "../images/dietCults.JPG";
import earlyShelf from "../images/earlyShelf.JPG";
import firstFullShelf from "../images/firstFullShelf.JPG";
import midBooks from "../images/midBooks.jpg";
import handstand from "../images/handstand.jpg";
import "./Gallery.css";

class Gallery extends Component {
    render() {
        return (
            <span>

            <div className="gallery">
                <div>
                    <img className="fiftyBooks galleryImg col-8" src={fiftyBooks} alt="Fifty Books" />
                </div>

                <div>
                    <img className="robertGreene galleryImg col-4 left" src={robertGreene} alt="Robert Greene" />
                </div>

                <div>
                    <img className="cardoneBooks galleryImg col-4 right" src={cardoneBooks} alt="Grant Cardone" />
                </div>

                <div>
                    <img className="daringGreatly galleryImg col-4 left" src={daringGreatly} alt="Daring Greatly" />
                </div>

                <div>
                    <img className="dietCults galleryImg col-4 right" src={dietCults} alt="Diet Cults" />
                </div>

                <div>
                    <img className="earlyShelf galleryImg col-4 right" src={earlyShelf} alt="Early Shelf" />
                </div>

                <div>
                    <img className="handstand galleryImg col-4 left" src={handstand} alt="Handstand" />
                </div>

                <div>
                    <img className="firstFullShelf galleryImg col-4 right" src={firstFullShelf} alt="First Full Shelf" />
                </div>

                <div>
                    <img className="midBooks galleryImg col-4 left" src={midBooks} alt="Some books" />
                </div>

                <div>
                    <img className="allBooks galleryImg col-8" src={allBooks} alt="All Books" />
                </div>
            </div>

            <Footer />
            </span>
        )
    }
}

export default Gallery;