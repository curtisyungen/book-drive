const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    createNewUser(req, res) {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            db.Users.findOrCreate({
                where: {
                    email: req.body.email,
                },
                defaults: {
                    email: req.body.email,
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