const db = require("../models/index.js");
const paypal = require("paypal-rest-sdk");

paypal.configure({
    "mode": "sandbox",
    "client_id": "AV8Iugkse1G7ntxZ15eI6KdFmCvKvEkSLBmWJWdWihsMIKnEDAcj_IFhjm9PZ7n1jCQeAgUrlXo-YQ2B",
    "client_secret": "EHPwT8Eo48LQNInmvHAqD_8Qy5PpQyGueniw55eh2Yzf38g0-CxDvhc8Jn4l7RTllfknIyqKCM4ogaHt",
});

class PayPalController {
    
    payUsingPayPal (req, res) {

        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://return.url",
                "cancel_url": "http://cancel.url"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log("Error processing payment", error);
            }

            // Used only to return axios promise
            db.Books.findOne({})
                .then(() => {
                    res.json(create_payment_json);
                });
        });
    }

    successfulPayment(req, res) {
        const payerId = req.query.PayerId;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "5.00",
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            }
            else {

                console.log(JSON.stringify(payment));

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