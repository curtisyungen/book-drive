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
                Test
            </div>
        )
    }
}

export default onClickOutside(SlideInMenu);