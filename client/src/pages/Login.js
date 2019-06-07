import React, { Component } from "react";
// import Container from "../components/Container/container";
import API from "../utils/API";
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
        this.props.createNewUser(this.state.email, this.state.password);
    }

    render() {
        return (
            <span className="loginPage">
                <div className="congoLogo">
                    <img src="" alt="Congo Logo" />
                </div>

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

                        <p className="formLabel">Password</p>
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
                            By continuing, you agree to Congo's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
                        </p>
                    </form>
                </div>
            </span>
        )
    }
}

export default Login;
