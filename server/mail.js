var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "free.mboxhosting.com",
  port: 25,
  auth: {
    user: "admin@agazh.tk",
    pass: "agazh123",
  },
});

var mailOptions = {
  from: "admin@agazh.tk",
  to: "mohammedismayil10@gmail.com",
  subject: "Testing the email from nodeJS",
  text: "That was very quick easy!",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
