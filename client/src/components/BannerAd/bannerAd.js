import React, { Component } from "react";
import "./bannerAd.css";

class BannerAd extends Component {

    openPortfolio = () => {
        window.open("https://curtisyungen.github.io/Portfolio");
    }

    render() {
        return (
            <div className="bannerPortfolioAd" onClick={(event) => {event.preventDefault(); this.openPortfolio();}}>
                <a className="portfolioLink" href="https://curtisyungen.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
                    <strong>HIRE CURTIS YUNGEN,</strong> WEB DEVELOPER.
                </a>

                <button
                    className="btn btn-dark bannerBtn"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    TAKE A LOOK
                </button>
            </div>
        )
    }
}

export default BannerAd;