const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    loginUser(req, res) {

        db.Users.findAll({
            where: {
                email: req.body.email,
            }
        })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password, function(err, response) {
                if (err) {
                    return console.log(err);
                }

                console.log(response);

                res.json(user);
            });
        });        

        // db.Users.findAll({
        //     where: {
        //         email: req.body.email,
        //         password: req.body.password,
        //     }
        // })
        // .then((user) => {
        //     res.json(user);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }

    createNewUser(req, res) {

        bcrypt.genSalt(11, function (err, salt) {
            if (err) {
                return console.log(err);
            }

            bcrypt.hash(req.body.password, salt, function(err, hash) {
                db.Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                })
                .then((user) => {
                    res.json(user);
                })
                .catch((err) => {
                    console.log(err);
                });
            });
        });
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