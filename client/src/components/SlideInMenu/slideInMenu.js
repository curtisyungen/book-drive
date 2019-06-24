import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./slideInMenu.css";

class SlideInMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: "show",
        }
    }

    componentDidMount = () => {
        this.setState({
            show: this.props.show,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.show !== this.props.show) {
            this.setState({
                show: this.props.show,
            })
        }
    }

    handleClickOutside = (event) => {
        event.preventDefault();
        this.props.hideSlideInMenu();
    }

    render() {
        return (
            <div
                className={`slideInMenu ${this.props.show}`}
            >
                <div className="slideInName">
                    Hello, name
                </div>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default onClickOutside(SlideInMenu);