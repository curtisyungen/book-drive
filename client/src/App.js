import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import API from "./utils/API";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      bookSearch: "",
      message: "",
      user: null,
      isLoggedIn: false,
      useAsGuest: true,
      userSearch: "",
      cart: [],
      redirectToHome: false,
      redirectToLogin: false,
    }
  }

  componentDidMount = () => {

    this.setState({
      redirectToHome: false,
      redirectToLogin: false,
    });

    this.getAllBooks();
  }

  componentDidUpdate = (prevState) => {
    if (prevState.redirectToHome || prevState.redirectToLogin) {
      this.setState({
        redirectToHome: false,
        redirectToLogin: false,
      });
    }
  }

  // REDIRECT HANDLING
  // ========================================= 

  setRedirectToHome = () => {
    this.setState({
      redirectToHome: true,
    });
  }

  setRedirectToLogin = () => {
    this.setState({
      redirectToLogin: true,
    });
  }

  redirectToHome = () => {
    return <Redirect to="/" />
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />
  }

  // USER HANDLING
  // =========================================

  createNewUser = (name, email, password) => {

    // Check to see if user email already exists in database
    API.findExistingUser(email)
      .then((res) => {

        // If email not found in database, create new user
        if (res.data.length === 0) {
          API.createNewUser(name, email, password)
            .then((res) => {

              let userData = {
                name: res.data.name,
                email: res.data.email,
              }

              // Save new user in local storage
              localStorage.setItem("user", JSON.stringify(userData));

              // Save login status in local storage
              localStorage.setItem("isLoggedIn", true);

              // Save new user in state
              this.setState({
                user: userData,
                isLoggedIn: true,
              }, () => {
                this.setRedirectToHome();
              });
            });
        }
        else {
          alert("An account already exists for this email address.");

          // Redirect to Login page
          this.setRedirectToLogin();
        }
      });
  }

  loginUser = (email, password) => {
    API.loginUser(email, password)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logoutUser = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("user", null);
    localStorage.setItem("cart", null);

    this.setState({
      isLoggedIn: false,
    });
    
    alert("You have been logged out.");
  }

  // BOOK FILTERING
  // =========================================

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
            userSearch: userInput,
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

  // CART HANDLING
  // =========================================

  sendToCart = (book) => {

  }

  saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  deleteFromCart = (book) => {

  }

  render() {
    return (
      <Router>
        <span>

          {/* SHOW OR HIDE NAVBAR */}

          {window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? (

            <Navbar
              bookSearch={this.state.bookSearch}
              handleInputChange={this.handleInputChange}
              searchForBook={this.searchForBook}
              getAllBooks={this.getAllBooks}
              logoutUser={this.logoutUser}
              isLoggedIn={this.state.isLoggedIn}
            />
          ) : (
              <></>
            )}

          {/* HANDLE PAGE REDIRECTS */}

          {this.state.redirectToHome ? (
            this.redirectToHome()
          ) : (
              <></>
            )}

          {this.state.redirectToLogin ? (
            this.redirectToLogin()
          ) : (
              <></>
            )}

          {/* HANDLE PAGE ROUTING */}

          <Switch>
            <Route exact path="/login" render={() =>
              <Login
                loginUser={this.loginUser}
              />
            } />
            <Route exact path="/signup" render={() =>
              <Signup
                createNewUser={this.createNewUser}
              />
            } />
            <Route exact path="/" render={() =>
              <Home
                books={this.state.books}
                getAllBooks={this.getAllBooks}
                getAvailableBooks={this.getAvailableBooks}
                getUnavailableBooks={this.getUnavailableBooks}
                getPaperbacks={this.getPaperbacks}
                getHardcovers={this.getHardcovers}
                getSubject={this.getSubject}
                userSearch={this.state.userSearch}
                sendToCart={this.sendToCart}
              />
            } />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" render={() =>
              <Cart
                deleteFromCart={this.deleteFromCart}
              />
            } />
            } />
          </Switch>
        </span>
      </Router>
    )
  }

}

export default App;
