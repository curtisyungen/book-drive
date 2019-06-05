const router = require("express").Router();
const BookController = require("../../controllers/BookController");
const controller = new BookController();

router.get("/getAllBooks", (req, res) => {
    controller.getAllBooks(req, res);
});

router.get("/getAvailableBooks", (req, res) => {
    controller.getAvailableBooks(req, res);
});

router.get("/getUnavailableBooks", (req, res) => {
    controller.getUnavailableBooks(req, res);
});

router.get("/getBooksSortedByTitle", (req, res) => {
    controller.getBooksSortedByTitle(req, res);
});

router.get("/getBooksSortedByAuthor", (req, res) => {
    controller.getBooksSortedByAuthor(req, res);
});

router.get("/getBookByTitle/:title", (req, res) => {
    controller.getBookByTitle(req, res);
});

router.get("/getBookByAuthor/:author", (req, res) => {
    controller.getBookByAuthor(req, res);
});

router.post("/addBook", (req, res) => controller.addBook(req, res));

module.exports = router;