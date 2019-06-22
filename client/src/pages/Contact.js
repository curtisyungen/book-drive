import React, { Component } from "react";
import Footer from "../components/Footer/footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./Contact.css";
import API from "../utils/API";

library.add(faTwitter, faInstagram, faLinkedin);



class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contactEmail: null,
            contactMessage: null,
        }
    }

    componentDidMount = () => {

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitContactForm = () => {

        let email = this.state.contactEmail;
        let message = this.state.contactMessage;

        console.log(email, message);

        if (email !== null && email !== "" && message !== null && message !== "") {

            API.submitContactForm(email, message)
            .then((res) => {
                console.log(res);

                alert("Message sent!");

                this.props.setRedirectToHome();
            });
        }
    }

    render() {
        return (
            <span>



                <h1 className="contactHeader">Want to get in touch with us?</h1>

                <div className="contactFormDiv">
                    <form className="contactForm">
                        <div class="form-group">
                            <label for="contactEmail">Email address</label>
                            <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp" name="contactEmail" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="contactMessage">Message</label>
                            <textarea type="text" class="form-control" id="contactMessage" name="contactMessage" maxLength="1000" />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-warning btn-sm"
                            onClick={(event) => {
                                event.preventDefault();
                                this.submitContactForm();
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/curtisyungen" target="_blank"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/curtisyungen/" target="_blank"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faInstagram} /></a>
                    <a href="https://twitter.com/yungenc" target="_blank"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faTwitter} /></a>
                </div>

                <Footer />
            </span>
        )
    }
}

export default Contact;