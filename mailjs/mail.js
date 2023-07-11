var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'danilo.decave@gmail.com',
    pass: 'polonio310',
  },
});

var mailOptions = {
  from: 'danilo.decave@gmail.com',
  to: 'danilo.decave@outlook.it',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
