import React, { Component } from "react";
import "./searchSuggestions.css";

class SearchSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {
        console.log(this.props);
    }

    render() {

        console.log("Suggestions", this.props.suggestions);

        return (
            <div
                className="searchSuggestions"
            >
                {this.state.suggestions.length > 0 ? (
                    this.state.suggestions.map(suggestion => (
                        <div className="suggestion">
                            {suggestion}
                        </div>
                    ))
                ):( 
                    <></>
                )}
            </div>
        )
    }
}

export default SearchSuggestions;