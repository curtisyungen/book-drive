const db = require("../models/index.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

class BookController {

    getAllBooks(req, res) {
        db.Books.findAll({})
            .then(books => {
                res.json(books);
            });
    }

    searchForBook(req, res) {
        db.Books.findAll({
            where: {
                [Op.or]: [
                    {
                        Title: {
                            [Op.like]: '%' + req.params.userInput + '%'
                        }
                    },
                    {
                        authorFirst: {
                            [Op.like]: '%' + req.params.userInput + '%'
                        }
                    },
                    {
                        authorLast: {
                            [Op.like]: '%' + req.params.userInput + '%'
                        }
                    }
                ]
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getAvailableBooks(req, res) {
        db.Books.findAll({
            where: {
                Avail: "avail",
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getUnavailableBooks(req, res) {
        db.Books.findAll({
            where: {
                [Op.or]: [
                    {
                        avail: "unavail"
                    },
                    {
                        avail: "hold"
                    },
                ]
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getPaperbacks(req, res) {
        db.Books.findAll({
            where: {
                Cover: "soft",
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getHardcovers(req, res) {
        db.Books.findAll({
            where: {
                Cover: "hard",
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    getSubject(req, res) {
        db.Books.findAll({
            where: {
                tags: {
                    [Op.like]: '%' + req.params.subject + '%',
                },
            }
        })
        .then(books => {
            res.json(books);
        });
    }

    update(req, res) {
        db.Books.update(req.body, { where: req.params })
            .then(book => 
                res.json(book));
    }
}

module.exports = BookController;