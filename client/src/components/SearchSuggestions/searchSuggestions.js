import React, { Component } from "react";
import "./searchSuggestions.css";

class SearchSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.suggestions !== this.props.suggestions) {
            this.setState({
                suggestions: this.props.suggestions,
            });
        }
    }

    render() {
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