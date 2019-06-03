import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let API_KEY="AIzaSyB7V5XONdn57paMHq5VJhqWwrzZ7IvK86g";

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

    getCoverByTitleAndAuthor: function(title, author) {

        let URL = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${API_KEY}`;

        return axios.get(URL, {})
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => {
                console.log(err);
            });
    }
};