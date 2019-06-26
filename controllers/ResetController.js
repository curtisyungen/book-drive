const db = require("../models/index.js");

class ResetController {

    setResetCode(req, res) {
        db.Reset.update(
            { resetCode: req.body.resetCode },
            {
                where: {
                    email: req.body.email,
                }
            }
        )
            .then((reset) => {
                res.json(reset);
            });
    }

    sendPasswordResetCode(req, res) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "congoserver@gmail.com",
                pass: process.env.GMAIL_PASSWORD,
            }
        });

        let mailOptions = {
            from: "congoserver@gmail.com",
            to: req.body.email,
            subject: "Password Reset",
            text: `
            Hi there,

            Here is your password reset code: ${req.body.resetCode}.

            If you continue to have issues, please contact us by responding to this email. 
            We'll be happy to assist you in recovering your account.

            Sincerely, 

            Congo`
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email sent: " + info.response);

                // Used only to fulfill axios promise
                db.Users.findAll({})
                    .then((order) => {
                        res.json(order);
                    });
            }
        });

        submitResetCode(req, res) {
            db.Reset.findOne({
                where: {
                    email: req.params.email,
                    resetCode: req.params.resetCode,
                }
            })
                .then((user) => {
                    res.json(user);
                });
        }
    }
}

module.exports = ResetController;