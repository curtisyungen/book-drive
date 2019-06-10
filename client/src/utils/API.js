import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// let API_KEY=process.env.GOOGLE_BOOKS_API_KEY;

export default {

    getAllBooks: function() {
        return axios.get("/api/books/getAllBooks/");
    },
    
    getSearchSuggestions: function(bookSearch) {
        return axios.get("/api/books/getSearchSuggestions/" + bookSearch);
    },

    searchForBook: function(userInput) {
        return axios.get("/api/books/searchForBook/" + userInput);
    },

    getAvailableBooks: function() {
        return axios.get("/api/books/getAvailableBooks/");
    },

    getUnavailableBooks: function() {
        return axios.get("/api/books/getUnavailableBooks/");
    },

    getPaperbacks: function() {
        return axios.get("/api/books/getPaperbacks/");
    },

    getHardcovers: function() {
        return axios.get("/api/books/getHardcovers/");
    },

    getSubject: function(subject) {
        return axios.get("/api/books/getSubject/" + subject);
    },

    loginUser: function(email, password) {
        let user = {
            email: email, 
            password: password,
        };

        return axios.get("/api/users/loginUser", user);
    },
    
    createNewUser: function(name, email, password) {
        let user = {
            name: name,
            email: email,
            password: password,
        };

        return axios.post("/api/users/createNewUser", user);
    },

    findExistingUser: function(email) {
        return axios.get("/api/users/findExistingUser/" + email)
    },

    checkBookAvail: function(book) {
        return axios.get("/api/books/checkBookAvail/" + book.title, book.authorLast);
    },

    putBookOnHold: function(book) {
        return axios.put("/api/books/putBookOnHold", book);
    },

    deleteBookFromCart: function(book) {
        return axios.put("/api/books/deleteBookFromCart", book);
    },
};
