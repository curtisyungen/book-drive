import React, { Component } from "react";
import Container from "../components/Container/container";
import "./Contact.css";
import API from "../utils/API";

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

        let email = this.state.email;
        let message = this.state.message;

        API.submitContactForm(email, message)
            .then((res) => {
                console.log(res);

                alert("Message sent!");

                this.props.setRedirectToHome();
            });
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
                    
                </div>
            </span>
        )
    }
}

export default Contact;