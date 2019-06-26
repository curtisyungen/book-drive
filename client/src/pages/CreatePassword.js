import React, { Component } from "react";
import API from "../utils/API";
import "./CreatePassword.css";

class CreatePassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPassword: null,
            verifyPassword: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            email: this.props.email,
        });
    }

    validatePassword = () => {
        return this.state.newPassword === this.state.verifyPassword && this.state.newPassword.length > 6;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitResetCode = (event) => {
        event.preventDefault();

        API.submitResetCode(this.state.email, this.state.resetCode)
            .then((res) => {
                if (res.data.length > 0) {
                    alert("Correct code.");
                    API.clearResetCode();
                }
                else {
                    alert("Incorrect code.");
                }
            });
    }

    render() {
        return (
            <span className="createPasswordPage">
                <a className="congoLogo" href="/">
                    <img className="loginLogo" src={require('../images/congo1.png')} alt="congo" />
                </a>

                <div className="reset">
                    <form>
                        <h4 className="passwordFormHeader">Create New Password</h4>
                        <p className="formSubHeader">We'll ask for this password whenever you Sign-In.</p>
                        <p className="formLabel">New Password</p>
                        <input
                            autoFocus
                            className="formInput"
                            name="newPassword"
                            value={this.state.newPassword}
                            onChange={this.handleInputChange}
                        />
                        <label className="passwordLabel">Passwords must be at least 6 characters.</label>

                        <p className="formLabel">Re-enter Password</p>
                        <input
                            className="formInput"
                            name="verifyPassword"
                            value={this.state.verifyPassword}
                            onChange={this.handleInputChange}
                        />

                        <button
                            className="submitResetCodeBtn"
                            onClick={this.submitResetCode}
                        >
                            Save changes and Sign-In
                        </button>
                    </form>
                </div>

                <div className="passwordTips">
                    <div className="passwordTipsTitle">Secure password tips:</div>
                    <ul>
                        <li className="passwordTip">Use passwords like "123456" or your birthdate. No one would ever guess it because it's too obvious.</li>
                        <li className="passwordTip">Write your password down on a sticky note and keep it displayed by your computer.</li>
                        <li className="passwordTip">Use a password that is personal and easy to guess in case you forget it again.</li>
                        <li className="passwordTip">Use one single password for all of your online accounts so it's easier to remember.</li>
                    </ul>
                </div>
            </span>
        )
    }
}

export default CreatePassword;
