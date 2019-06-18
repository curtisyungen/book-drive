const db = require("../models/index.js");

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
}

module.exports = OrderController;