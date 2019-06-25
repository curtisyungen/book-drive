import React, { Component } from "react";
import FilterOptions from "../FilterOptions/filterOptions";
import "./slideInMenu.css";

class SlideInMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            user: null,
            showSlideInMenu: "show",
            showFiltersMenu: "hide",
        }
    }

    componentDidMount = () => {
        this.setState({
            isLoggedIn: this.props.isLoggedIn,
            user: this.props.user,
            showSlideInMenu: this.props.showSlideInMenu,
            showFiltersMenu: this.props.showFiltersMenu,
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.showSlideInMenu !== this.props.showSlideInMenu ||
            prevProps.showFiltersMenu !== this.props.showFiltersMenu) {
            this.setState({
                isLoggedIn: this.props.isLoggedIn,
                user: this.props.user,
                showSlideInMenu: this.props.showSlideInMenu,
                showFiltersMenu: this.props.showFiltersMenu,
            })
        }
    }

    setFilter = (param1, param2) => {
        return 0;
    }

    render() {
        return (
            <div
                className={`slideInMenu ${this.props.showSlideInMenu}`}
            >
                {this.state.isLoggedIn && this.state.user !== null ? (
                    <div className="slideInName">Hello, {this.state.user.name}</div>
                ) : (
                        <div className="slideInName">Hello, Sign in</div>
                    )}
                <ul className="slideInMenuList">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/orders">Orders</a>
                    </li>
                    {this.state.isLoggedIn ? (
                        <li>
                            <div
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.logoutUser();
                                }}
                            >
                                Sign out
                            </div>
                        </li>
                    ) : (
                            <li>
                                <a href="/login">Sign in</a>
                            </li>
                        )}
                </ul>

                <ul>
                    <li>

                        {/* FILTERS MENU OPTION */}

                        {window.location.pathname === "/" ? (
                            <div
                                className="showFiltersMenuBtn"
                                onClick={this.props.toggleFiltersMenu}
                            >
                                Filters
                            </div>
                            ) : (
                                <></>
                        )}

                        {this.props.showFiltersMenu === "show" ? (
                            <FilterOptions
                                getAllBooks={this.props.getAllBooks}
                                getFilteredBooks={this.props.getFilteredBooks}
                                setFilter={this.setFilter}
                                showFiltersMenu={this.state.showFiltersMenu}
                                toggleFiltersMenu={this.props.toggleFiltersMenu}
                                source="slideIn"
                            />
                        ) : (
                            <></>
                        )}
                    </li>
                </ul>
            </div>
        )
    }
}

export default SlideInMenu;