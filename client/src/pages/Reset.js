import React, { Component } from "react";
import API from "../utils/API";
import "./Reset.css";

class Reset extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            resetCode: null,
        }
    }

    componentDidMount = () => {
        this.setState({
            email: this.props.email,
        });
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
                console.log("Submit Reset Code", res.data);

                if (res.data.length > 0) {
                    alert("Correct code.");
                }
                else {
                    alert("Incorrect code.");
                }
            });
    }

    render() {
        return (
            <span className="resetPage">
                <a className="congoLogo" href="/">
                    <img className="loginLogo" src={require('../images/congo1.png')} alt="congo" />
                </a>

                <div className="reset">
                    <form>
                        <h4 className="resetFormHeader">Authentication required</h4>
                        <p className="formSubHeader">{`For your security, we need to authenticate your request. We've sent a One Time Password (OTP) to the email ${this.state.email}. Please enter it below.`}</p>
                        <p className="formLabel">Enter OTP</p>
                        <input
                            autoFocus
                            className="formInput"
                            name="resetCode"
                            value={this.state.resetCode}
                            onChange={this.handleInputChange}
                        />

                        <button
                            className="submitResetCodeBtn"
                            onClick={this.submitResetCode}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </span>
        )
    }
}

export default Reset;