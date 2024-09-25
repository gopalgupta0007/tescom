// const express = require("express");
// const http = require("http");
// const nodemailer = require("nodemailer");
// // const sendsMails = require("./Controller/SendMail");
// const app = express(); 0
// // let PORT = 5000;


// app.get("/", (req, res) => {
//   res.send("I am a server");
// });

// // app.get("/mail", sendsMails)
// // const server = http.createServer(app)

// server = http.createServer((request, response) => {
//   console.log(request.body)
//   const auth = nodemailer.createTransport({
//     service: "gmail",
//     secure: true,
//     port: 465,
//     auth: {
//       user: 'guptagopal18082003@gmail.com',
//       pass: 'bsewpuzwkjwspxos'
//     }
//   });

//   const receiver = {
//     from: "guptagopal18082003@gmail.com",
//     to: "bscit202196gopalgupta@gncasc.org",
//     subject: "Node 3s Mail Testing!",
//     text: "Hello this is a text mail!"
//   };

//   auth.sendMail(receiver, (error, emailResponse) => {
//     if (error)
//       throw error;
//     response.send(emailResponse);
//     console.log("success!");
//     response.end()
//   })
// })



// // app.get("/mail", sendsMails)

// server.listen(5000, () => console.log("server running on port 5000"))


// // ____________________________________________________________________________________________________

// const express = require("express");
// const app = express();
// const PORT = 5000;

// // Middleware to parse JSON request bodies
// app.use(express.json());
// // app.use((req, res, next) => {
// //   res.setHeader("Content-Security-Policy", "default-src * 'unsafe-inline' 'unsafe-eval'; font-src *");
// //   next();
// // });
// // Endpoint to receive data
// app.get("/", (req, res) => res.send("test"))

// app.post("/mail", (req, res) => {
//   console.log("testing");
//   const { value } = req.body; // Extract `x` from the request body
//   console.log("Received x value from client:", req.body);

//   // Respond to the client
//   res.status(200).send({ message: `Received x value: ${value}` });
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // ____________________________________________________________________________________________________


const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


const app = express();
const PORT = 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Create a transport object with your email service configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_ID,
    pass: process.env.PASSWORD// Replace with your email password or app-specific password
  }
});

app.get("/", (req, res) => res.send("server running port 5000"))

// Endpoint to handle sending email
app.post('/mail', (req, res) => {
  var { email, otp } = req.body;
  console.log(email, otp);
  // Email options
  // mailTxt="OTP : "+otp;
  const mailOptions = {
    from: process.env.USER_ID,
    to: email,
    subject: "OTP From Tescom Business Solution",
    text: "OTP : " + String(otp)
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

// app.post('/phoneno', (req, res) => {
//   const { phone, otp } = req.body;
//   console.log("data is => ", phone, otp);
//   // let msgOptions = {
//   //   from: process.env.TWILIO_PHONE_NUMBER,
//   //   to: '+918369032864',
//   //   body: `Your OTP code is: ${Math.floor(100000 + Math.random() * 900000)}`
//   // }
//   console.log("these =>>>>>>>",process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
//   try {
//     const message = twilio.messages.create({
//         body: 'check i am sending sms 2',
//         from: '+16062688733',
//         to: '+919082257079'
//         // to: '+919324751582'
//       })
//       .then(message => console.log("these is sid => ",message.sid))
//       .done();
//     console.log(message);
//     console.log("sms sended...");
//     res.status(200).send("otp sended successfully")
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("something wrong")
//   }
// })

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
