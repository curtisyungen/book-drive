import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Login from "./pages/Login";
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
      bookSearch: "",
      message: "",
      userLoggedIn: false,
      useAsGuest: true
    }
  }

  componentDidMount = () => {
    this.getAllBooks();
  }

  createNewUser = (email, password) => {
    API.createNewUser(email, password)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
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

  searchForBook = (userInput) => {
    if (userInput !== "" && userInput !== null) {
      API.searchForBook(userInput)
        .then((res) => {
          this.setState({
            books: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    else {
      this.getAllBooks();
    }
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

  getPaperbacks = () => {
    API.getPaperbacks()
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

  getHardcovers = () => {
    API.getHardcovers()
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

  getSubject = (subject) => {
    API.getSubject(subject)
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

          {window.location.pathname !== "/login" ? (

          <Navbar
            bookSearch={this.state.bookSearch}
            handleInputChange={this.handleInputChange}
            searchForBook={this.searchForBook}
            getAllBooks={this.getAllBooks}
          />
          ) : ( 
            <></>
          )}

          <Switch>
            <Route exact path="/login" render={() => 
              <Login 
                createNewUser={this.createNewUser}
              />
            }
            />
            <Route exact path="/" render={() =>
              <Home
                books={this.state.books}
                getAllBooks={this.getAllBooks}
                getAvailableBooks={this.getAvailableBooks}
                getUnavailableBooks={this.getUnavailableBooks}
                sortByTitle={this.sortByTitle}
                sortByAuthor={this.sortByAuthor}
                getPaperbacks={this.getPaperbacks}
                getHardcovers={this.getHardcovers}
                getSubject={this.getSubject}
              />
            } />
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
