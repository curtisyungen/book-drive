import React, { Component } from "react";
import FilterOptions from "../FilterOptions/filterOptions";
import "./sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <div
                className="sidebar"
            >
                <FilterOptions
                    getAllBooks={this.props.getAllBooks}
                    setFilter={this.props.setFilter}
                    getFilteredBooks={this.props.getFilteredBooks}
                    source="sidebar"
                    filterString={this.state.filterString}
                />
            </div>
        )
    }
}

export default Sidebar;