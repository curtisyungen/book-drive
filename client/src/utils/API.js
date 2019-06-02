import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default {

    getAllBooks: function() {
        return axios.get("/api/books/getAllBooks/");
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