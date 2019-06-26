const db = require("../models/index.js");
const paypal = require("paypal-rest-sdk");

paypal.configure({
    "mode": "live",
    "client_id": process.env.PAYPAL_LIVE_CLIENT_ID, 
    "client_secret": process.env.PAYPAL_LIVE_CLIENT_SECRET,
});

class PayPalController {
    
    payUsingPayPal (req, res) {
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "https://congo-cjy.herokuapp.com/success",
                "cancel_url": "https://congo-cjy.herokuapp.com/cart"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Congo Book Order",
                        "sku": "books",
                        "price": req.params.total,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": req.params.total
                },
                "description": "Your book order from Congo."
            }]
        };
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log("Error processing payment", error);
            }

            // Used only to return axios promise
            db.Books.findAll({})
                .then(() => {
                    res.json(payment);
                });
        });
    }

    successfulPayment(req, res) {
        const payerId = req.query.payerId;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": req.query.total,
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            }
            else {
                db.Books.findOne({})
                    .then(() => {
                        res.json(payment);
                    });
            }
        });
    }

    cancelPayment(req, res) {
        db.Books.findOne({})
            .then(() => {
                res.json("Cancelled.");
            });
    }
}

module.exports = PayPalController;