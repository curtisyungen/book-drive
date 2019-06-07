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
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <span className="signupPage">
                <a className="congoLogo" href="/">
                    <img src="" alt="Congo Logo" />
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
                        />

                        <p className="formLabel">Email</p>
                        <input
                            className="formInput"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />

                        <p className="formLabel">Password</p>
                        <input
                            className="formInput"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />

                        <p className="formLabel">Re-enter password</p>
                        <input
                            className="formInput"
                            name="password"
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
