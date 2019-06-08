import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      userLoggedIn: false,
      useAsGuest: true,
      userSearch: "",
      cart: [],
    }
  }

  componentDidMount = () => {
    this.getAllBooks();
  }

  loginUser = (email, password) => {
    API.loginUser(email, password)
      .then((res) => {
        console.log(res);
        this.setState({
          userLoggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createNewUser = (name, email, password) => {

    API.findExistingUser(email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    API.createNewUser(name, email, password)
        .then((res) => {
          this.setState({
            userLoggedIn: true,
          });
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

  saveUserToLocalStorage = (email) => {
    let user = {
        email: email,
    }

    localStorage.setItem("user", JSON.stringify(user));
  }

  sendToCart = (book) => {
    let cart = this.state.cart;
    cart.push(book);

    API.addBookToCart(book)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      cart: cart,
    }, () => {
      alert("Added!");
      this.saveCartToLocalStorage();
    });
  }

  saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  render() {
    return (
      <Router>
        <span>

          {window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? (

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
                loginUser={this.loginUser}
                saveUserToLocalStorage={this.saveUserToLocalStorage}
              />
            }/>
            <Route exact path="/signup" render={() => 
              <Signup
                createNewUser={this.createNewUser}
                saveUserToLocalStorage={this.saveUserToLocalStorage}
              />
            }/>
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
                cart={this.state.cart}
              />
            } />
          </Switch>
        </span>
      </Router>
    )
  }

}

export default App;
