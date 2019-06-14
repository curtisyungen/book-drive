import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

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
        return axios.get("/api/books/checkBookAvail/" + book.title);
    },

    putBookOnHold: function(book) {
        return axios.put("/api/books/putBookOnHold", book);
    },

    releaseBookFromHold: function(book) {
        return axios.put("/api/books/releaseBookFromHold", book);
    },

    payUsingPayPal: function(items) {

        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://return.url",
                "cancel_url": "http://cancel.url"
            },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log("Error processing payment", error);
            }

            return payment;
        });
    },

    successfulPayment: function() {
        return axios.get("/api/payPal/successfulPayment");
    },

    cancelPayment: function() {
        return axios.get("/api/payPal/cancelPayment");
    },

    getBookByTitle: function(title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    },
};
