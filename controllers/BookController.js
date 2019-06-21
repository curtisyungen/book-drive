const db = require("../models/index.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class BookController {

    getAllBooks(req, res) {
        db.Books.findAll({})
            .then(books => {
                res.json(books);
            });
    }

    getSearchSuggestions(req, res) {
        db.Books.findAll({
            where: {
                [Op.or]: [
                    {
                        Title: {
                            [Op.like]: '%' + req.params.bookSearch + '%'
                        }
                    },
                    {
                        authorFirst: {
                            [Op.like]: '%' + req.params.bookSearch + '%'
                        }
                    },
                    {
                        authorLast: {
                            [Op.like]: '%' + req.params.bookSearch + '%'
                        }
                    }
                ]
            }
        })
        .then(suggestions => {

            let topTen = suggestions.slice(0, 10).map(book => {
                return {
                    id: book.id,
                    title: book.title,
                    authorFirst: book.authorFirst,
                    authorLast: book.authorLast,
                }
            });

            res.json(topTen);
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
                        Avail: "unavail"
                    },
                    {
                        Avail: "hold"
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

    checkBookAvail(req, res) {
        db.Books.findAll({
            where: {
                title: req.params.title,
            },
        })
        .then((book) => {
            res.json(book);
        });
    }

    addToCart(req, res) {
        db.Books.update(
            {avail: req.params.email},
            {where: {
                title: req.body.title,
                authorFirst: req.body.authorFirst,
                authorLast: req.body.authorLast,
            }})
            .then((book) => {
                res.json(book);
            });
    }

    deleteFromCart(req, res) {
        db.Books.update(
            {avail: "avail"},
            {where: {
                title: req.body.title,
                authorFirst: req.body.authorFirst,
                authorLast: req.body.authorLast,
            }})
            .then((book) => {
                res.json(book);
            });
    }

    getBooksInCart(req, res) {
        db.Books.findAll({
            where: {
                avail: req.params.email,
            }
        })
        .then((books) => {
            res.json(books);
        });
    }

    purchaseBook(req, res) {
        db.Books.update(
            {
                avail: "unavail",
                buyer: req.params.email
            },
            {where: {
                title: req.body.title,
                authorFirst: req.body.authorFirst,
                authorLast: req.body.authorLast,
            }})
            .then((book) => {
                res.json(book);
            });
    }

    getBookSuggestions(req, res) {
        db.Books.findAll({
            where: {
                avail: "avail",
            },
            order: [Sequelize.literal('RAND()')],
            limit: 3,
        })
        .then((books) => {
            res.json(books);
        });
    }
}

module.exports = BookController;
