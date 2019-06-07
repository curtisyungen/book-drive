const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    createNewUser(req, res) {

        bcrypt
            .hash(req.body.password, 10)
            .then(hash => {

                console.log("Hash", hash);

                db.Users.findOrCreate({
                    where: {
                        email: req.body.email,
                    },
                    defaults: {
                        email: req.body.email,
                        password: hash,
                    }
                })
                .spread((user) => {
                    res.json(user);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = UserController;