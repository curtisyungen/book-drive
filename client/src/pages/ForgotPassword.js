import React, { Component } from "react";
import API from "../utils/API";
import "./ForgotPassword.css";

class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    getPasswordReset = (event) => {
        event.preventDefault();

        if (this.state.email !== null && this.state.email !== "") {
            
            // Check if email exists in database
            API.findExistingUser(this.state.email)
                .then((res) => {

                    // If email is found, send password reset message
                    if (res.data.length > 0) {

                        let email = this.state.email;

                        // Set reset code in database
                        API.setResetCode(email)
                            .then((res) => {

                                console.log("Set Reset Code", res);

                                // Email reset code to user
                                API.sendPasswordResetCode(email, res.data);

                                // Redirect to reset code input page
                                this.props.setRedirectToPasswordReset();
                            });       
                    }
                    // Message if email not found in database
                    else {
                        alert("No account exists for this user.");

                        this.setState({
                            email: "",
                        });
                    }
                });
        }
        else {
            alert("Please enter your email address.");
        }
    }

    sendPasswordReset = () => {
        if (this.state.email !== null && this.state.email !== "") {
            API.sendPasswordReset(this.state.email);
        }
        else {
            alert("Please enter your email address.");
        }
    }

    render() {
        return (
            <span className="loginPage">
                <a className="congoLogo" href="/">
                    <img className="loginLogo" src={require('../images/congo1.png')} alt="congo" />
                </a>

                <div className="login">
                    <form>
                        <h4 className="formHeader">Password assistance</h4>
                        <p className="formSubHeader">Enter the email address associated with your Congo account.</p>
                        <p className="formLabel">Email</p>
                        <input
                            autoFocus
                            className="formInput"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />

                        <button
                            className="submitEmailBtn"
                            onClick={this.getPasswordReset}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </span>
        )
    }
}

export default ForgotPassword;