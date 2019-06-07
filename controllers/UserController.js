const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    createNewUser(req, res) {
        bcrypt.hash(req.params.password, 10, function(err, hash) {
            db.Users.findOrCreate({
                where: {
                    email: req.params.email,
                    password: hash,
                }
            })
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                console.log(err);
            });
        });
    }
}

export default UserController;