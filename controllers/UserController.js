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
            to: req.params.email,
            subject: "Password Reset",
            text: `
            Hi there,

            Here is your password reset code: ${req.params.resetCode}.

            If you continue to have issues, please contact us by responding to this email. 
            We'll be happy to assist you in recovering your account.

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

    submitResetCode(req, res) {
        db.Users.findOne({
            where: {
                email: req.params.email,
                resetCode: req.params.resetCode,
            }
        })
        .then((user) => {
            res.json(user);
        });
    }
}

module.exports = UserController;