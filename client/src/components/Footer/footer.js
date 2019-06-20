import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="footer">
                <div 
                    className="footerScrollToTop"
                    onClick={(event) => {
                        event.preventDefault(); 
                        this.scrollToTop();
                    }}
                >
                    Back to top
                </div>
            </div>
        )
    }
}

export default Footer;