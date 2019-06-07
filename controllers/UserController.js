const db = require("../models/index.js");
const bcrypt = require("bcrypt");

class UserController {

    loginUser(req, res) {
        db.Users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    createNewUser(req, res) {

        // bcrypt
        //     .hash(req.body.password, 10)
        //     .then(hash => {

        //         console.log("Hash", hash);

                db.Users.findOrCreate({
                    where: {
                        email: req.body.email,
                    },
                    defaults: {
                        email: req.body.email,
                        password: req.body.password,
                    }
                })
                .spread((user) => {
                    res.json(user);
                });
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
    }
}

module.exports = UserController;