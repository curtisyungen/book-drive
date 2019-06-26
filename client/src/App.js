import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BannerAd from "./components/BannerAd/bannerAd";
import Navbar from "./components/Navbar/navbar";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Reset from "./pages/Reset";
import Signup from "./pages/Signup";
import SlideInMenu from "./components/SlideInMenu/slideInMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import API from "./utils/API";
import './App.css';

import UnderConstruction from "./components/UnderConstruction/underConstruction";

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
      redirectToPasswordReset: false,
      showSlideInMenu: "hide",
      showFiltersMenu: "hide",
    }
  }

  componentDidMount = () => {

    this.setState({
      redirectToHome: false,
      redirectToLogin: false,
      redirectToSignUp: false,
      redirectToPasswordReset: false,
    });

    this.getAllBooks();
    this.loadUserFromLocalStorage();
  }

  loadUserFromLocalStorage = () => {
    if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("user") !== null) {
      this.setState({
        user: JSON.parse(localStorage.getItem("user")),
        isLoggedIn: true,
      }, () => {
        this.getBooksInCart(this.state.user.email);
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

  setRedirectToSignUp = () => {
    this.setState({
      redirectToSignUp: true,
    });
  }

  setRedirectToPasswordReset = () => {
    this.setState({
      redirectToPasswordReset: true,
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

  redirectToPasswordReset = () => {
    return <Redirect to="/reset" />
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
                this.transferGuestCartToUser();
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

          API.loginUser(email, password)
            .then((res) => {

              if (res.data !== "Incorrect password.") {
                alert("Logged in successfully!");

                // Save login status in Local Storage
                localStorage.setItem("isLoggedIn", true);

                let userData = {
                  name: res.data.name,
                  email: res.data.email,
                }

                // Save user data in Local Storage
                localStorage.setItem("user", JSON.stringify(userData));

                // Save user cart in state
                this.setState({
                  isLoggedIn: true,
                  user: res.data,
                });

                // Get user's cart
                this.transferGuestCartToUser();
                this.getBooksInCart(res.data.email);

                // Redirect to Home Page
                this.setRedirectToHome();
              }
              else {
                alert("Incorrect password.");
              }

            });
        }
      });
  }

  logoutUser = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("user", null);
    sessionStorage.setItem("cart", null);

    this.setState({
      isLoggedIn: false,
    }, () => {
      alert("You have been logged out.");
    });

    this.setRedirectToHome();
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

      if (window.location.href !== "/") {
        this.setRedirectToHome();
      }

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

  getFilteredBooks = (availFilter, formatFilter, subjectFilter) => {
    API.getAllBooks()
      .then((res) => {

        let filteredBooks = res.data;

        // Apply availability filter (available or unavailable)
        if (availFilter !== null && availFilter !== "") {
          if (availFilter === "unavail") {
            filteredBooks = filteredBooks.filter(book => (
              book.avail !== "avail"
            ));
          }
          else {
            filteredBooks = filteredBooks.filter(book => (
              book.avail === availFilter
            ));
          }
        }

        // Apply format filter (hardcover or paperback)
        if (formatFilter !== null && formatFilter !== "") {
          filteredBooks = filteredBooks.filter(book => (
            book.cover === formatFilter
          ));
        }

        // Apply subject filter (biography, fiction, nonfiction, etc.)
        if (subjectFilter !== null && subjectFilter !== "") {
          filteredBooks = filteredBooks.filter(book => (
            book.tags.indexOf(subjectFilter) > -1
          ));
        }

        this.setState({
          books: filteredBooks,
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          message: "Error loading books.",
        });
      });
  }

  // CART HANDLING
  // =========================================

  sendToCart = (book) => {

    // Check if book is still available
    API.checkBookAvail(book)
      .then((res) => {
        if (res.data.length > 0 && res.data[0].avail === "avail" && res.data[0].authorLast === book.authorLast) {

          if (localStorage.getItem("isLoggedIn") === "true") {
            this.addToCart(book);
          }
          else {
            this.addToGuestCart(book);
          }
        }
        else {
          alert("Sorry, this book is no longer available.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addToGuestCart = (book) => {
    let idx = -1;
    let cart = [];
    if (sessionStorage.getItem("cart") && JSON.parse(sessionStorage.getItem("cart")) !== null) {
      cart = JSON.parse(sessionStorage.getItem("cart"));

      // Check if book is already in guest's cart to avoid duplicates
      for (var item in cart) {
        if (cart[item].title === book.title) {
          idx = item;
        }
      }
    }

    if (idx !== -1 && cart !== []) {
      alert("Book is already in cart.");
    }
    else {
      cart.push(book);

      this.setState({
        cart: cart,
      }, () => {
        alert("Added to cart!");
        sessionStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      });
    }
  }

  addToCart = (book) => {
    API.addToCart(book, this.state.user.email)
      .then((res) => {
        alert("Added to cart!");
        this.getBooksInCart(this.state.user.email);
        window.location.reload();
      });
  }

  deleteFromCart = (book) => {
    if (this.state.isLoggedIn && localStorage.getItem("isLoggedIn") === "true") {
      API.deleteFromCart(book)
        .then((res) => {
          alert("Removed from cart!");
          this.getBooksInCart(this.state.user.email);
          window.location.reload();
        });
    }
    else {
      let cart;

      if (sessionStorage.getItem("cart") && sessionStorage.getItem("cart") !== null) {
        cart = JSON.parse(sessionStorage.getItem("cart"));

        for (var item in cart) {
          if (cart[item].title === book.title) {
            cart.splice(item, 1);
          }
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert("Removed from cart!");

        window.location.reload();
      }
    }
  }

  getBooksInCart = (email) => {
    API.getBooksInCart(email)
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      });
  }

  // Pulls cart items from session storage and add to cart in database
  // Called when guest logs in or signs up for account
  transferGuestCartToUser = () => {
    let guestCart;
    if (sessionStorage.getItem("cart") && sessionStorage.getItem("cart") !== null) {
      guestCart = JSON.parse(sessionStorage.getItem("cart"));
    }

    if (guestCart !== null) {
      for (var item in guestCart) {
        this.addToCart(guestCart[item]);
      }
    }
  }

  // RESPONSIVE VIEW
  // =========================================

  showSlideInMenu = () => {
    this.setState({
      showSlideInMenu: "show",
    });
  }

  hideSlideInMenu = () => {
    this.setState({
      showSlideInMenu: "hide",
      showFiltersMenu: "hide",
    });
  }

  toggleFiltersMenu = () => {
    let status = "show";
    if (this.state.showFiltersMenu === "show") {
      status = "hide";
    }

    this.setState({
      showFiltersMenu: status,
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

          {this.state.redirectToPasswordReset ? (
            this.redirectToPasswordReset()
          ) : (
            <></>
          )}

          {/* SHOW OR HIDE NAVBAR */}

          {(window.location.pathname !== "/login" && window.location.pathname !== "/signup" && window.location.pathname !== "/forgot") ? (
            <span>
              <BannerAd />

              <Navbar
                bookSearch={this.state.bookSearch}
                handleInputChange={this.handleInputChange}
                searchForBook={this.searchForBook}
                getAllBooks={this.getAllBooks}
                logoutUser={this.logoutUser}
                isLoggedIn={this.state.isLoggedIn}
                showSlideInMenu={this.showSlideInMenu}
                cart={this.state.cart}
              />
            </span>
          ) : (
              <></>
            )}

          <SlideInMenu
            showSlideInMenu={this.state.showSlideInMenu}
            hideSlideInMenu={this.hideSlideInMenu}
            isLoggedIn={this.state.isLoggedIn}
            user={this.state.user}
            logoutUser={this.logoutUser}
            getAllBooks={this.getAllBooks}
            getFilteredBooks={this.getFilteredBooks}
            showFiltersMenu={this.state.showFiltersMenu}
            toggleFiltersMenu={this.toggleFiltersMenu}
            cart={this.state.cart}
          />

          {this.state.showSlideInMenu === "show" ? (
            <div
              className="overlay"
              onClick={this.hideSlideInMenu}
            ></div>
          ) : (
              <></>
            )}

          <UnderConstruction />

          {/* HANDLE PAGE ROUTING */}

          <Switch>
            <Route exact path="/login" render={() =>
              <Login
                loginUser={this.loginUser}
              />
            } />
            <Route exact path="/forgot" render={() => 
              <ForgotPassword 
                setRedirectToPasswordReset={this.setRedirectToPasswordReset}
              />
            } />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/signup" render={() =>
              <Signup
                createNewUser={this.createNewUser}
              />
            } />
            <Route exact path="/" render={() =>
              <Home
                books={this.state.books}
                getAllBooks={this.getAllBooks}
                getFilteredBooks={this.getFilteredBooks}
                userSearch={this.state.userSearch}
                sendToCart={this.sendToCart}
                updateParentState={this.updateParentState}
                showSlideInMenu={this.state.showSlideInMenu}
                hideSlideInMenu={this.hideSlideInMenu}
              />
            } />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" render={() =>
              <Contact
                setRedirectToHome={this.setRedirectToHome}
              />
            } />
            <Route exact path="/orders" render={() =>
              <Orders
                user={this.state.user}
                sendToCart={this.sendToCart}
              />
            } />
            <Route exact path="/cart" render={() =>
              <Cart
                deleteFromCart={this.deleteFromCart}
                getBooksInCart={this.getBooksInCart}
                cart={this.state.cart}
                user={this.state.user}
                setRedirectToSignUp={this.setRedirectToSignUp}
                sendToCart={this.sendToCart}
              />
            } />
            <Route exact path="/success" render={() =>
              <Success
                user={this.state.user}
                cart={this.state.cart}
              />
            }
            />
            <Route exact path="/cancel" component={Cancel} />
            } />
          </Switch>
        </span>
      </Router>
    )
  }

}

export default App;
