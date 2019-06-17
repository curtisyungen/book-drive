const router = require("express").Router();
const PayPalController = require("../../controllers/PayPalController");
const controller = new PayPalController();


router.get("/successfulPayment", (req, res) => {
    controller.successfulPayment(req, res);
});

router.get("/cancelPayment", (req, res) => {
    controller.cancelPayment(req, res);
});

router.post("/payUsingPayPal", (req, res) => {
    controller.payUsingPayPal(req, res);
});

module.exports = router;