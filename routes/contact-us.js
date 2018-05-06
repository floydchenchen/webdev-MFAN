var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

router.use(require('body-parser').urlencoded({ extended: true }));

var api = process.env.MAP_API;

// const sendmail = require('sendmail')();

var user = process.env.MAIL_USERNAME;
var pass = process.env.MAIL_PASSWORD;
// var api = process.env.API;

router.post('/', function(req, res) {

    // sendmail({
    //     from: req.body.email,
    //     to: 'fjn19971007@outlook.com',
    //     subject: req.body.subject,
    //     html: req.body.message + "\n\n" + req.body.name
    // }, function(err, reply) {
    //     console.log(err && err.stack);
    //     console.dir(reply);
    // });



    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user, // generated ethereal user
            pass: pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"MFAN Admin', // sender address
        to: 'jbain@umn.edu', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message + "\n\n" + req.body.email + "\n" + req.body.name, // plain text body
        html: '' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    res.redirect("/contact-us");
});



module.exports = router;
