import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./footer.css";

library.add(faTwitter, faInstagram, faLinkedin);

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

                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/curtisyungen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/curtisyungen/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faInstagram} /></a>
                    <a href="https://twitter.com/yungenc" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-5x socialMediaIcon" icon={faTwitter} /></a>
                </div>

                <p className="copyright">© 2019, Congo or its affiliates</p>
            </div>
        )
    }
}

export default Footer;