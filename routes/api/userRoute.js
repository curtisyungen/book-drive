const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const controller = new UserController();

router.post("/createNewUser", (req, res) => {
    console.log("userRoute", req);
    controller.createNewUser(req, res);
});

module.exports = router;

