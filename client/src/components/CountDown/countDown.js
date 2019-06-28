import React, { Component } from "react";
import "./countDown.css";

class CountDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            now: null,
            targetDate: null,
            remaining: null,
            days: null,
            hours: null,
            minutes: null,
            seconds: null,
        }
    }

    componentDidMount = () => {
        let targetDate = new Date("August 1, 2019").getTime();

        this.setState({
            targetDate: targetDate,
        }, () => {
            this.calculateTime();
        });
    }

    calculateTime = () => {
        setInterval(() => {
            let currDate = new Date().getTime();
            let remaining = this.state.targetDate - currDate;

            let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            this.setState({
                currDate: currDate,
                remaining: remaining,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }, 1000);
    }

    render() {
        return (
            <div className="countDown">
                {this.state.days ? (
                    `Sale ends in 
                    ${this.state.days}d 
                    ${this.state.hours}h 
                    ${this.state.minutes}m 
                    ${this.state.seconds}s 
                    `
                ) : (
                    `Loading...`
                )}
            </div>
        )
    }
}

export default CountDown;