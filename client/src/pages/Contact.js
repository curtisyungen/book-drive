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

        if (email !== null && email !== "" && message !== null && message !== "") {

            // Send email to Congo inbox
            API.submitContactForm(email, message)
            .then((res) => {
                alert("Message sent!");

                // Send copy to user at email provided
                API.sendCopyToUser(email, message) 
                .then((res) => {
                    this.props.setRedirectToHome();
                });
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
                            <label for="contactEmail">Your email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="contactEmail" 
                                aria-describedby="emailHelp" 
                                name="contactEmail" 
                                onChange={this.handleInputChange}
                                autoComplete="off"
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="contactMessage">Message</label>
                            <textarea 
                                type="text" 
                                class="form-control" 
                                id="contactMessage" 
                                name="contactMessage" 
                                maxLength="1000" 
                                onChange={this.handleInputChange}
                            />
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

                <Footer />
            </span>
        )
    }
}

export default Contact;