const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const controller = new UserController();

router.get("/loginUser", (req, res) => {
    controller.loginUser(req, res);
});

router.get("/findExistingUser/:email", (req, res) => {
    controller.findExistingUser(req, res);
});

router.post("/createNewUser", (req, res) => {
    controller.createNewUser(req, res);
});

router.put("/updateCart/:email/:cart", (req, res) => {
    controller.updateCart(req, res);
});

module.exports = router;

