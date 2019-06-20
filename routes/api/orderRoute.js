const router = require("express").Router();
const OrderController = require("../../controllers/OrderController");
const controller = new OrderController();

router.get("/getUserBookOrders/:email", (req, res) => {
    controller.getUserBookOrders(req, res);
});

router.post("/sendConfirmationEmail", (req, res) => {
    controller.sendConfirmationEmail(req, res);
});

router.post("/createBookOrder", (req, res) => {
    controller.createBookOrder(req, res);
});

router.post("/saveOrderTotal", (req, res) => {
    controller.saveOrderTotal(req, res);
});

module.exports = router;