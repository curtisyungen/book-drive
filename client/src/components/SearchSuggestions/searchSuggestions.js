import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
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

    handleClickOutside = (event) => {
        event.preventDefault();
        this.setState({
            showSearchSuggestions: false,
        });
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
                            onClick={(event) => {
                                event.preventDefault();
                                this.props.chooseSearchSuggestion(suggestion.title)
                            }}
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

export default onClickOutside(SearchSuggestions);