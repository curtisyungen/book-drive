import React, { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
            <span>

                <h4 className="aboutHeader">About</h4>

                <div className="about">
                    Congo is a project created to sell my extensive collection of self-help books.

                    Over the years I've collected upwards of 470 books, most of them self-help books. 
                    I haven't read many but not all of them. A good number have been partially read, and others haven't even been opened.

                    Now the books serve only to impress visitors to my apartment as they sit piled on the floor collecting dust.

                    I'm done helping myself; now I'd like to help you get your hands on some books...at a discount.
                </div>
            </span>
        )
    }
}

export default About;