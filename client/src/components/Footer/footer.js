import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footerScrollToTop">
                    Back to top
                </div>
                Footer
            </div>
        )
    }
}

export default Footer;