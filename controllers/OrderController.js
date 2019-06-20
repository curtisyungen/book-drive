const db = require("../models/index.js");
const nodemailer = require("nodemailer");

class OrderController {

    getUserBookOrders(req, res) {
        db.Orders.findAll({
            where: {
                email: req.params.email,
            }
        })
            .then((orders) => {
                res.json(orders);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    createBookOrder(req, res) {
        db.Orders.create({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            totalPrice: req.body.totalPrice,
            items: req.body.items,
            itemQty: req.body.itemQty,
            shippingAddress: req.body.shippingAddress,
        })
            .then((order) => {
                res.json(order);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    saveOrderTotal(req, res) {
        db.Orders.findAll({})
            .then((order) => {
                res.json(order);
            });
    }

    sendConfirmationEmail(req, res) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "congoserver@gmail.com",
                pass: process.env.GMAIL_PASSWORD,
            }
        });

        let mailOptions = {
            from: "congoserver@gmail.com",
            to: "curtisyungen@gmail.com",
            subject: "Your Congo Book Order",
            text: "Success!",
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email sent: " + info.response);

                db.Orders.findAll({})
                    .then((order) => {
                        res.json(order);
                    });
            }
        });
    }
}

module.exports = OrderController;
