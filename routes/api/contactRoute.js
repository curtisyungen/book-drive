const router = require("express").Router();
const BookController = require("../../controllers/BookController");
const controller = new BookController();

router.get("/sendContactMessage", (req, res) => {
    controller.sendContactMessage(req, res);
});

module.exports = router;