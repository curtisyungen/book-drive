const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

class UserController {

    loginUser(req, res) {

        db.Users.findOne({
            where: {
                email: req.query.email,
            }
        })
        .then((user) => {
            bcrypt.compare(req.query.password, user.password, function(err, result) {
                if (result === true) {
                    res.json(user);
                }
                else {
                    res.json("Incorrect password.");
                }
            });
        });        
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

    sendPasswordReset(req, res) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "congoserver@gmail.com",
                pass: process.env.GMAIL_PASSWORD,
            }
        });

        let mailOptions = {
            from: "congoserver@gmail.com",
            to: req.body.email,
            subject: "Password Reset",
            text: `
            Hi ${req.body.name},

            Click here to reset your password: https://congo-cjy.herokuapp.com/passwordReset

            Sincerely, 

            Congo`
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email sent: " + info.response);

                // Used only to fulfill axios promise
                db.Users.findAll({})
                    .then((order) => {
                        res.json(order);
                    });
            }
        });
    }
}

module.exports = UserController;