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
            to: req.body.email,
            subject: "Your Congo Book Order",
            text: `
            Hi ${req.body.name},

            Thank you for your order! Your books will be shipped within the next 1-2 days.
            
            Here's a summary of your order: 

            Shipping Address: 
            ${JSON.parse(req.body.shippingAddress).recipient_name}
            ${JSON.parse(req.body.shippingAddress).line1}
            ${JSON.parse(req.body.shippingAddress).city}, ${JSON.parse(req.body.shippingAddress).state} ${JSON.parse(req.body.shippingAddress).postal_code}
            ${JSON.parse(req.body.shippingAddress).country_code}

            Items Ordered: 
            ${req.body.itemList}

            Total Price: 
            $${(Math.round(req.body.totalPrice * 100) / 100).toFixed(2)}

            If you have questions, concerns, or would like to make changes to your order, simply respond to this email and
            we will be happy to assist you.

            Sincerely, 

            Congo
            https://congobooksales.com`
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email sent: " + info.response);

                // Used only to fulfill axios promise
                db.Orders.findAll({})
                    .then((order) => {
                        res.json(order);
                    });
            }
        });
    }
}

module.exports = OrderController;
