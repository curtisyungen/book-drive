const router = require("express").Router();
const ContactController = require("../../controllers/ContactController");
const controller = new ContactController();

router.get("/submitContactForm", (req, res) => {
    controller.submitContactForm(req, res);
});

module.exports = router;