import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
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
        this.props.loginUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <span className="loginPage">
                <a className="congoLogo" href="/">
                    <img src="" alt="Congo Logo" />
                </a>

                <div className="login">
                    <form>
                        <h4 className="formHeader">Sign in</h4>
                        <p className="formLabel">Email</p>
                        <input
                            autoFocus
                            className="formInput"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />

                        <span className="formLabel">Password</span>
                        <a className="forgotYourPassword" href="/forgot">Forgot your password?</a>
                        <input
                            className="formInput"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <button
                            className="loginBtn"
                            disabled={!this.validateForm()}
                            onClick={this.handleSubmit}
                            type="submit"
                        >
                            Sign in
                        </button>
                        <p className="disclaimer">
                            By continuing, you agree to Congo's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice.</a>
                        </p>
                    </form>

                    <p className="newToCongo">New to Congo?</p>

                    <button
                        className="btn btn-light createAccountBtn"
                    >
                        <a className="createAccountAnchor" href="/signup">Create your Congo account</a>
                    </button>
                </div>
            </span>
        )
    }
}

export default Login;
