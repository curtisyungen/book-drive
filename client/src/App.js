import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import API from "./utils/API";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      message: "",
    }
  }

  componentDidMount = () => {
    this.getAllBooks();
  }

  getAllBooks = () => {

    this.setState({
      message: "Loading...",
    });

    API.getAllBooks()
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          message: "Error loading books.",
        });
      });
  }

  getAvailableBooks = () => {
    API.getAvailableBooks()
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          message: "Error loading books.",
        });
      });
  }

  getUnavailableBooks = () => {
    API.getUnavailableBooks()
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          message: "Error loading books.",
        });
      });
  }

  sortByTitle = () => {
    API.getBooksSortedByTitle()
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          message: "Error loading books.",
        });
      });
  }

  sortByAuthor = () => {
    API.getBooksSortedByAuthor()
    .then((res) => {
      this.setState({
        books: res.data,
      });
    })
    .catch((err) => {
      this.setState({
        message: "Error loading books.",
      });
    });
  }

  render() {
    return (
      <Router>
        <span>

          <Navbar />
          
          <Switch>
            <Route exact path="/" render={() => 
              <Home
                books={this.state.books}
                getAllBooks={this.getAllBooks}
                getAvailableBooks={this.getAvailableBooks}
                getUnavailableBooks={this.getUnavailableBooks}
                sortByTitle={this.sortByTitle}
                sortByAuthor={this.sortByAuthor}
              />
            }/>
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

        </span>
      </Router>
    )
  }

}

export default App;
