import React, { Component } from "react";
import "./underConstruction.css";

class UnderConstruction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterAvail: false,
            filterFormat: false,
            filterSubject: false,
            activeOption: null,
        }
    }

    render() {
        return (
            <div className="underConstruction">
                <a href="https://github.com/curtisyungen/congo/issues/1" target="_blank">
                    Site under construction. Estimated completion date: June 26, 2019.
                </a>
            </div>
        )
    }
}

export default UnderConstruction;
