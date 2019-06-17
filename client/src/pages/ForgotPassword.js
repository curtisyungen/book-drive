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

    sendPasswordReset = (event) => {
        event.preventDefault();

        API.sendPasswordReset();
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
                            onClick={this.sendPasswordReset}
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