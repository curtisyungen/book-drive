import React, { Component } from "react";
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

    handleSubmit = (event) => {
        event.preventDefault();
    
    }

    render() {
        return (
            <span className="loginPage">
                <a className="congoLogo" href="/">
                    <img src="" alt="Congo Logo" />
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