import React, { Component } from "react";
import Footer from "../components/Footer/footer";
import "./About.css";

class About extends Component {
    render() {
        return (
            <span>
                <h4 className="aboutHeader">About</h4>
                <div className="about">

                    {/* ABOUT - INTRO */}
                    <div className="aboutSection aboutIntro">
                        Congo is a project created to sell my extensive collection of books.

                        Over the years I've collected upwards of 460 books, most of them self-help books.
                        I have read many but not all of them. A good number have been partially read, and others haven't even been opened.

                        Now the books serve only to impress visitors to my apartment as they sit piled on the floor collecting dust.

                        I'm done helping myself; now I'd like to help you get your hands on some books...at a discount.
                    </div>

                    <div className="aboutSection aboutTechnical">
                        Everything on this site was created from scratch including all graphics, logos, page headers, button icons, and scripts.
                        The only things taken from Amazon were the book cover images (as cited) and genuine inspiration from their beautiful and high-quality website.
                    </div>

                    {/* ABOUT - BOOKS */}
                    <h4 className="aboutTitle">The Books</h4>
                    <div className="aboutSection aboutBusiness">
                        All books are used but their conditions vary. Some books may be brand new and unblemished; others may have dog-eared pages, highlights, or tear stains.
                        Every book is listed at a discounted rate than the normal market rate. Shipping is always free. The actual book covers may vary from the
                        cover shown on the website.

                        Books will be up for sale until August 1, 2019.
                    </div>

                    {/* ABOUT - TECHNICAL */}
                    <h4 className="aboutTitle">The Technology</h4>
                    <div className="aboutSection">
                        Payments are handled by PayPal rather than directly by Congo.
                        User data is private and all passwords are encrypted.
                    </div>

                    <div className="aboutSection">
                        Technologies Used
                        <ul className="technologyList">
                            <li className="technology">MySQL</li>
                            <li className="technology">Express.js</li>
                            <li className="technology">ReactJS</li>
                            <li className="technology">Node.js</li>
                        </ul>
                    </div>

                    <div className="aboutSection">
                        APIs Used
                        <ul className="technologyList">
                            <li className="technology">PayPal API</li>
                            <li className="technology">Google Books API</li>
                        </ul>
                    </div>

                    <div className="aboutSection">
                        Dependencies
                        <ul className="dependencyList">
                            <li className="dependency">axios</li>
                            <li className="dependency">bcrypt</li>
                            <li className="dependency">express</li>
                            <li className="dependency">nodemailer</li>
                            <li className="dependency">paypal-rest-sdk</li>
                            <li className="dependency">react-dom</li>
                            <li className="dependency">react-responsive-modal</li>
                            <li className="dependency">react-router</li>
                            <li className="dependency">reactjs-popup</li>
                            <li className="dependency">sequelize</li>
                        </ul>
                    </div>

                    {/* ABOUT - CREATOR */}
                    <h4 className="aboutTitle">The Person</h4>
                    <div className="aboutSection aboutCreator">
                        This website was designed and built by Curtis Yungen. Curtis is a Boeing engineer and web developer, designing planes by day and websites by night. 
                        Check out his <a href="https://curtisyungen.github.io/Portfolio" target="_blank" rel="noopener noreferrer">online portfolio</a>.
                    </div>

                    <h4 className="aboutTitle">The Inspiration</h4>
                    <div className="aboutSection">
                        This website was born from a love of two things: reading and coding. These combined with a deep admiration and respect for Amazon
                        fueled the creation of Congo. 
                    </div>

                    <h4 className="aboutTitle">The Namesake</h4>
                    <div className="aboutSection">
                        The Congo is the second largest rainforest in the world, spanning 1.5 million square miles of Central Africa.
                        It is home to the Congo River as well as over 10,000 animal species. 
                        It has been referred to as the Heart of Darkness, though there is no link between that title and this innocent little online bookstore.
                    </div>
                </div>

                <Footer />
            </span>
        )
    }
}

export default About;
