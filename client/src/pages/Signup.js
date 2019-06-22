import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            verifyPassword: "",
        }
    }

    validateForm = () => {
        return (
            this.state.email.length > 0 && this.state.password.length > 0 &&
            this.state.password === this.state.verifyPassword &&
            this.state.password.length >= 6
        );
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewUser(this.state.name, this.state.email, this.state.password);
    }

    render() {
        return (
            <span className="signupPage">
                <a className="congoLogo" href="/">
                    <img className="loginLogo" src={require('../images/congo1.png')} alt="congo" />
                </a>

                <div className="signup">
                    <form>
                        <h4 className="formHeader">Create account</h4>
                        <p className="formLabel">Your name</p>
                        <input 
                            autoFocus
                            className="formInput"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                        />

                        <p className="formLabel">Email</p>
                        <input
                            className="formInput"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                        />

                        <p className="formLabel">Password</p>
                        <input
                            className="formInput"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="At least 6 characters"
                        />
                        <label for="password" className="passwordLabel">Passwords must be at least 6 characters</label>

                        <p className="formLabel">Re-enter password</p>
                        <input
                            className="formInput"
                            name="verifyPassword"
                            type="password"
                            value={this.state.verifyPassword}
                            onChange={this.handleInputChange}
                        />

                        <button
                            className="signupBtn"
                            disabled={!this.validateForm()}
                            onClick={this.handleSubmit}
                            type="submit"
                        >
                            Create your Congo account
                        </button>

                        <p className="disclaimer">
                            By continuing, you agree to Congo's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice.</a>
                        </p>

                        <p className="separator"></p>

                        <div className="alreadyHaveAccount">
                            <span>Already have an account?</span>
                            <a href="/login">{` Sign in`}</a>
                        </div>
                    </form>
                </div>
            </span>
        )
    }
}

export default Signup;
