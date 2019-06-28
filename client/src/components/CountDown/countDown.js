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
            setInterval(function() {
                this.calculateTime();
            }, 1000);
        });
    }

    calculateTime = () => {
        let currDate = new Date().getTime();
        let remaining = this.state.targetDate - currDate;

        let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({
            currDate: currDate,
            remaining: remaining,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }

    render() {
        return (
            <div className="countDown">
                {`${this.state.days}:${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
            </div>
        )
    }
}

export default CountDown;