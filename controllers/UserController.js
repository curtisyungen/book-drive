const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    loginUser(req, res) {
        db.Users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    createNewUser(req, res) {

        // bcrypt
        //     .hash(req.body.password, 10)
        //     .then(hash => {

        //         console.log("Hash", hash);

                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                })
                .then((user) => {
                    res.json(user);
                })
                .catch((err) => {
                    console.log(err);
                });
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
    }

    findExistingUser(req, res) {
        db.Users.findAll({
            where: {
                email: req.param.email,
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    addBookToCart(req, res) {
        db.Books.update(
            {avail: "hold"}, 
            {where: {
                title: req.body.title,
                authorFirst: req.body.authorFirst,
                authorLast: req.body.authorLast,
            }})
        .then((book) => {
            res.json(book);
        });
    }
}

module.exports = UserController;