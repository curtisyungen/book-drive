import React, { Component } from "react";
import "./searchSuggestions.css";

class SearchSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div
                className="searchSuggestions"
            >
                {this.props.suggestions.length > 0 ? (
                    this.props.suggestions.map(suggestion => (
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