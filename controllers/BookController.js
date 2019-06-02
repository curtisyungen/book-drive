const db = require("../models/index.js");

class BookController {

    getAllBooks(req, res) {
        db.books.findAll({})
            .then(books => {
                res.json(books);
            });
    }

    getBookByTitle(req, res) {
        db.books.findAll({
            where: {
                title: req.body.title,
            }
        })
        .then(function(book) {
            res.json(book);
        });
    }

    getBookByAuthor(req, res) {
        db.books.findAll({
            where: {
                author: req.body.author,
            }
        })
        .then(function(book) {
            res.json(book);
        });
    }

    addBook(req, res) {
        db.books.create(req.body)
            .then(function(book) {
                res.json(book);
            });
    }

    update(req, res) {
        db.books.update(req.body, { where: req.params })
            .then(book => 
                res.json(book));
    }
}

module.exports = BookController;