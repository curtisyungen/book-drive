const db = require("../models/index.js");

class BookController {

    getAllBooks(req, res) {
        db.Books.findAll({})
            .then(books => {
                res.json(books);
            });
    }

    getAvailableBooks(req, res) {
        db.Books.findAll({
            where: {
                Avail: 0,
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getUnavailableBooks(req, res) {
        db.Books.findAll({
            where: {
                Avail: 1,
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getBooksSortedByTitle(req, res) {
        db.Books.findAll({
            order: [
                ['title', 'ASC'],
              ],
        })
        .then(books => {
            res.json(books);
        });
    }

    getBooksSortedByAuthor(req, res) {
        db.Books.findAll({
            order: [
                ['authorLast', 'ASC'],
              ],
        })
        .then(books => {
            res.json(books);
        });
    }

    getBookByTitle(req, res) {
        db.Books.findAll({
            where: {
                title: req.body.title,
            }
        })
        .then(function(book) {
            res.json(book);
        });
    }

    getBookByAuthor(req, res) {
        db.Books.findAll({
            where: {
                author: req.body.author,
            }
        })
        .then(function(book) {
            res.json(book);
        });
    }

    addBook(req, res) {
        db.Books.create(req.body)
            .then(function(book) {
                res.json(book);
            });
    }

    update(req, res) {
        db.Books.update(req.body, { where: req.params })
            .then(book => 
                res.json(book));
    }
}

module.exports = BookController;