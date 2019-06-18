const router = require("express").Router();
const OrderController = require("../../controllers/OrderController");
const controller = new OrderController();

router.get("/getUserBookOrders/:email", (req, res) => {
    controller.getUserBookOrders(req, res);
});

router.post("/createBookOrder", (req, res) => {
    controller.createBookOrder(req, res);
});

module.exports = router;