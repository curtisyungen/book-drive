import React, { Component } from "react";
import Footer from "../components/Footer/footer";
import "./Error.css";

class Error extends Component {
    render() {
        return (
            <span>
                <div className="errorPage">
                    <p>Page not found.</p>
                </div>
                
                <Footer />
            </span>
        )
    }
}

export default Error;