const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

//view engine setup

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Body Parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contact/form', (req, res) => {
    res.render('contact')
});

app.post('/contact/send', (req, res) => {
    const output = ` <p>You have a new contact request</p>
    <h3> Contact details </h3>
    <ul>
        <li>Name: ${req.body.name}
        <li>Company: ${req.body.company}
        <li>Email: ${req.body.email}
        <li>Phone: ${req.body.phone}
    </ul>
    <p>Message</p>
    ${req.body.message}`
    console.log(req.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "sammiel.gross@gmail.com", // generated ethereal user
            pass: "" // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'sammiel.gross@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

       res.render('contact', {msg: "Email has been sent!"})
    });
});

app.listen(3000, (() =>
    console.log('server started...')
));