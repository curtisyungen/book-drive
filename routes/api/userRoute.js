const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const controller = new UserController();

router.get("/loginUser", (req, res) => {
    controller.loginUser(req, res);
});

router.get("/findExistingUser/:email", (req, res) => {
    controller.findExistingUser(req, res);
});

router.get("/submitResetCode", (req, res) => {
    controller.submitResetCode(req, res);
});

router.post("/createNewUser", (req, res) => {
    controller.createNewUser(req, res);
});

router.post("/sendPasswordReset", (req, res) => {
    controller.sendPasswordReset(req, res);
});

module.exports = router;

