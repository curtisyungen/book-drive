import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BannerAd from "./components/BannerAd/bannerAd";
import Navbar from "./components/Navbar/navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
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
      userSearch: "",
      cart: [],
      redirectToHome: false,
      redirectToLogin: false,
      redirectToSignUp: false,
    }
  }

  componentDidMount = () => {

    this.setState({
      redirectToHome: false,
      redirectToLogin: false,
    });

    this.getAllBooks();
  }

  componentWillUnmount = () => {

    // If guest user, make books in cart available again in database
    if (!this.state.isLoggedIn) {

      let cart;
      if (sessionStorage.getItem("cart")) {
        cart = JSON.parse(sessionStorage.getItem("cart"));
      }

      if (cart) {
        for (var item in cart) {

          let book = {
            title: cart[item].title,
            authorFirst: cart[item].authorFirst,
            authorLast: cart[item].authorLast,
          }

          API.releaseBookFromHold(book);
        }
      }
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

  setRedirectToSignUp = () => {
    this.setState({
      redirectToSignUp: true,
    });
  }

  redirectToHome = () => {
    return <Redirect to="/" />
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />
  }

  redirectToSignUp = () => {
    return <Redirect to="/signup" />
  }

  updateParentState = () => {
    this.setState({
      redirectToHome: false,
      redirectToLogin: false,
    });
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

    // Check to see if user email exists in database
    API.findExistingUser(email)
      .then((res) => {

        // If email not found in database, redirect to Sign Up page
        if (res.data.length === 0) {
          alert("No user found with this email address.");

          this.setRedirectToSignUp();
        }
        // Otherwise update login status
        else {
          if (res.data[0].password === password) {
            alert("Logged in successfully!");

                // Save login status in Local Storage
                localStorage.setItem("isLoggedIn", true);

                let userData = {
                  name: res.data[0].name,
                  email: res.data[0].email,
                }

                // Save user data in Local Storage
                localStorage.setItem("user", JSON.stringify(userData));

                this.setState({
                  isLoggedIn: true,
                });

                // Redirect to Home Page
                this.setRedirectToHome();
          }
          else {
            alert("Incorrect password.");
          }
        }
      });
  }

  logoutUser = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("user", null);
    sessionStorage.setItem("cart", null);

    this.setState({
      isLoggedIn: false,
    });

    alert("You have been logged out.");

    window.location.reload();
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
    API.checkBookAvail(book)
      .then((res) => {
        if (res.data.length > 0 && res.data[0].avail === "avail" && res.data[0].authorLast === book.authorLast) {
          console.log("Book is available.");

          let cart = [];
          if (sessionStorage.getItem("cart") && JSON.parse(sessionStorage.getItem("cart")) !== null) {
            cart = JSON.parse(sessionStorage.getItem("cart"));
          }

          cart.push(book);
          sessionStorage.setItem("cart", JSON.stringify(cart));

          this.putBookOnHold(book);

          alert("Added to cart!");
        }
        else {
          alert("Sorry, this book is no longer available.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  putBookOnHold = (book) => {
    API.putBookOnHold(book)
      .then((res) => {
        console.log("Put book on hold", res);
      });
  }

  deleteFromCart = (book) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    for (var b in cart) {
      if (cart[b].title === book.title) {
        cart.splice(b, 1);
      }
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));

    this.releaseBookFromHold(book);

    alert("Removed from cart!");
    
    window.location.reload();
  }

  releaseBookFromHold = (book) => {
    API.releaseBookFromHold(book)
      .then((res) => {
        console.log("Release book from hold", res);
      });
  }

  render() {
    return (
      <Router>
        <span>
          
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

          {this.state.redirectToSignUp ? (
            this.redirectToSignUp()
          ) : (
            <></>
          )}

          {/* SHOW OR HIDE NAVBAR */}

          {(window.location.pathname !== "/login" && window.location.pathname !== "/signup") ? (
            <span>
              <BannerAd />

              <Navbar
                bookSearch={this.state.bookSearch}
                handleInputChange={this.handleInputChange}
                searchForBook={this.searchForBook}
                getAllBooks={this.getAllBooks}
                logoutUser={this.logoutUser}
                isLoggedIn={this.state.isLoggedIn}
              />
            </span>
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
                updateParentState={this.updateParentState}
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
            <Route exact path="/success" component={Success} />
            <Route exact path="/cancel" component={Cancel} />
            } />
          </Switch>
        </span>
      </Router>
    )
  }

}

export default App;
