import React, { Component } from "react";
import "./searchSuggestions.css";

class SearchSuggestions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.suggestions !== this.props.suggestions) {
            this.setState({
                suggestions: this.props.suggestions,
            });
        }
    }

    chooseSuggestion = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div
                className="searchSuggestions"
            >
                {this.state.suggestions.constructor === Array && this.state.suggestions.length > 0 ? (
                    this.state.suggestions.map(suggestion => (
                        <div 
                            className="suggestion"
                            onClick={this.chooseSuggestion}
                        >
                            {`${suggestion.title} by ${suggestion.authorFirst} ${suggestion.authorLast}`}
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