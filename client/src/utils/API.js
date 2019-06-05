import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let API_KEY=process.env.GOOGLE_BOOKS_API_KEY;

export default {

    getAllBooks: function() {
        return axios.get("/api/books/getAllBooks/");
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

    getBookByTitle: function(title) {
        return axios.get("/api/books/getBookByTitle/" + title);
    },

    getBookByAuthor: function(author) {
        return axios.get("/api/books/getBookByAuthor/" + author);
    },

    addBook: function(title, author, price, avail, imageURL, tags) {
        let book = {
            title: title,
            author: author,
            price: price,
            avail: avail, 
            imageURL: imageURL, 
            tags: tags,
        }
        return axios.post("/api/books/addBook/" + book);
    },
};
