const router = require("express").Router();
const BookController = require("../../controllers/BookController");
const controller = new BookController();

router.get("/getAllBooks", (req, res) => {
    controller.getAllBooks(req, res);
});

router.get("/searchForBook/:userInput", (req, res) => {
    controller.searchForBook(req, res);
});

router.get("/getAvailableBooks", (req, res) => {
    controller.getAvailableBooks(req, res);
});

router.get("/getUnavailableBooks", (req, res) => {
    controller.getUnavailableBooks(req, res);
});

router.get("/getPaperbacks", (req, res) => {
    controller.getPaperbacks(req, res);
});

router.get("/getHardcovers", (req, res) => {
    controller.getHardcovers(req, res);
});

router.get("/getSubject/:subject", (req, res) => {
    controller.getSubject(req, res);
});

module.exports = router;