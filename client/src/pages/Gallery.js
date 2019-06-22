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
import millionaireMind from "../images/millionaireMind.jpg";
import losingAMillion from "../images/losingAMillion.jpg";
import noOneUnderstands from "../images/noOneUnderstands.jpg";
import rousey from "../images/rousey.jpg";
import soGood from "../images/soGood.jpg";
import seal from "../images/seal.jpg";
import buyology from "../images/buyology.jpg";
import bounce from "../images/bounce.jpg";
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
                        <img className="millionaireMind galleryImg col-4 left" src={millionaireMind} alt="Millionaire Mind" />
                    </div>

                    <div>
                        <img className="losingAMillion galleryImg col-4 right" src={losingAMillion} alt="losingAMillion" />
                    </div>

                    <div>
                        <img className="noOneUnderstands galleryImg col-4 left" src={noOneUnderstands} alt="noOneUnderstands" />
                    </div>

                    <div>
                        <img className="rousey galleryImg col-4 right" src={rousey} alt="rousey" />
                    </div>

                    <div>
                        <img className="soGood galleryImg col-4 left" src={soGood} alt="soGood" />
                    </div>

                    <div>
                        <img className="seal galleryImg col-4 right" src={seal} alt="seal" />
                    </div>

                    <div>
                        <img className="buyology galleryImg col-4 left" src={buyology} alt="buyology" />
                    </div>

                    <div>
                        <img className="bounce galleryImg col-4 right" src={bounce} alt="bounce" />
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