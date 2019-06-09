const db = require("../models/index.js");
// const bcrypt = require("bcrypt");

class UserController {

    loginUser(req, res) {
        db.Users.findAll({
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
                email: req.params.email,
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

module.exports = UserController;