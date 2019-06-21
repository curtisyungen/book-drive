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
                Site under construction. Estimated completion date: June 26, 2019.
            </div>
        )
    }
}

export default UnderConstruction;