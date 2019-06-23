const router = require("express").Router();
const BookController = require("../../controllers/BookController");
const controller = new BookController();

router.get("/getAllBooks", (req, res) => {
    controller.getAllBooks(req, res);
});

router.get("/getSearchSuggestions/:bookSearch", (req, res) => {
    controller.getSearchSuggestions(req, res);
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

router.get("/getFilteredAvailable/:filter", (req, res) => {
    controller.getFilteredAvailable(req, res);
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

router.get("/checkBookAvail/:title", (req, res) => {
    controller.checkBookAvail(req, res);
});

router.get("/getBooksInCart/:email", (req, res) => {
    controller.getBooksInCart(req, res);
});

router.get("/getBookSuggestions", (req, res) => {
    controller.getBookSuggestions(req, res);
});

router.put("/addToCart/:email", (req, res) => {
    controller.addToCart(req, res);
});

router.put("/deleteFromCart", (req, res) => {
    controller.deleteFromCart(req, res);
});

router.put("/purchaseBook/:email", (req, res) => {
    controller.purchaseBook(req, res);
});

module.exports = router;