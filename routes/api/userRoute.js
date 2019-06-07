const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const controller = new UserController();

router.post("/createNewUser", (req, res) => {
    controller.createNewUser(req, res);
});

module.exports = router;

