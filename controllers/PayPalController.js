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
                "return_url": "http://localhost:3000/success",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Book",
                        "sku": "001",
                        "price": "5.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "5.00"
                },
                "description": "This is a book."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {

            // Used to return axios promise
            db.Books.findOne({})
            .then(() => {
                res.json(payment);
            });
        });

        
    }
}

module.exports = PayPalController;