const router = require("express").Router();
const ContactController = require("../../controllers/ContactController");
const controller = new ContactController();

router.post("/submitContactForm", (req, res) => {
    controller.submitContactForm(req, res);
});

module.exports = router;