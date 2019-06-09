import React, { Component } from "react";
import "./bannerAd.css";

class BannerAd extends Component {

    render() {
        return (
            <div className="bannerPortfolioAd">
                <a className="portfolioLink" href="https://curtisyungen.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
                    <strong>HIRE CURTIS YUNGEN,</strong> WEB DEVELOPER.
                </a>

                <button
                    className="btn btn-dark bannerBtn"
                >
                    TAKE A LOOK
                </button>
            </div>
        )
    }
}

export default BannerAd;