import axios from "axios";
import dotenv from "dotenv";
var mailgun = require('mailgun-js');

dotenv.config();

export default {

    getAllBooks: function () {
        return axios.get("/api/books/getAllBooks/");
    },

    getSearchSuggestions: function (bookSearch) {
        return axios.get("/api/books/getSearchSuggestions/" + bookSearch);
    },

    searchForBook: function (userInput) {
        return axios.get("/api/books/searchForBook/" + userInput);
    },

    getAvailableBooks: function () {
        return axios.get("/api/books/getAvailableBooks/");
    },

    getUnavailableBooks: function () {
        return axios.get("/api/books/getUnavailableBooks/");
    },

    getPaperbacks: function () {
        return axios.get("/api/books/getPaperbacks/");
    },

    getHardcovers: function () {
        return axios.get("/api/books/getHardcovers/");
    },

    getSubject: function (subject) {
        return axios.get("/api/books/getSubject/" + subject);
    },

    loginUser: function (email, password) {
        let user = {
            email: email,
            password: password,
        };

        return axios.get("/api/users/loginUser", user);
    },

    createNewUser: function (name, email, password) {
        let user = {
            name: name,
            email: email,
            password: password,
        };

        return axios.post("/api/users/createNewUser", user);
    },

    updateCart: function (email, cart) {
        let data = {
            email: email,
            cart: cart,
        }
        return axios.put("/api/users/updateCart", data);
    },

    findExistingUser: function (email) {
        return axios.get("/api/users/findExistingUser/" + email);
    },

    checkBookAvail: function (book) {
        return axios.get("/api/books/checkBookAvail/" + book.title);
    },

    putBookOnHold: function (book) {
        return axios.put("/api/books/putBookOnHold", book);
    },

    releaseBookFromHold: function (book) {
        return axios.put("/api/books/releaseBookFromHold", book);
    },

    payUsingPayPal: function (total) {
        return axios.post("/api/payPal/payUsingPayPal/" + total);
    },

    successfulPayment: function () {
        return axios.get("/api/payPal/successfulPayment");
    },

    cancelPayment: function () {
        return axios.get("/api/payPal/cancelPayment");
    },

    getBookByTitle: function (title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    },

    sendPasswordReset: function () {
        var api_key = '16ffd509-0edbbce6';
        var domain = 'sandboxc304b206702d426aa94846dced4a4a73.mailgun.org';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

        var data = {
            from: 'Congo <postmaster@sandboxc304b206702d426aa94846dced4a4a73.mailgun.org>',
            to: 'curtisyungen@gmail.com',
            subject: 'Hello',
            text: 'Testing some Mailgun awesomeness!'
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
        });
    }
};
