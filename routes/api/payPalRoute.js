const router = require("express").Router();
const PayPalController = require("../../controllers/PayPalController");
const controller = new PayPalController();

router.post("/payUsingPayPal", (req, res) => {
    controller.payUsingPayPal(req, res);
});

module.exports = router;