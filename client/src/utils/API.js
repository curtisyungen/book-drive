import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// let API_KEY=process.env.GOOGLE_BOOKS_API_KEY;

export default {

    getAllBooks: function() {
        return axios.get("/api/books/getAllBooks/");
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

    getBooksSortedByTitle: function() {
        return axios.get("/api/books/getBooksSortedByTitle/");
    },

    getBooksSortedByAuthor: function() {
        return axios.get("/api/books/getBooksSortedByAuthor/");
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

    createNewUser: function(email, password) {
        let user = {
            email: email,
            password: password,
        }

        return axios.post("/api/users/createNewUser", user);
    },
};
