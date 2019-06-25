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
                    setActiveFilter={this.props.setActiveFilter}
                    setFilter={this.setFilter}
                    getFilteredBooks={this.props.getFilteredBooks}
                />
            </div>
        )
    }
}

export default Sidebar;