const nodemailer = require("nodemailer");

const sendsMails = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        server:"gmail",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: 'guptagopal18082003@gmail.com',
            pass: 'bsewpuzwkjwspxos'
        },
    });

    const info = await transporter.sendMail({
        from: 'guptagopal18082003@gmail.com', // sender address
        to: "bscit202196gopalgupta@gncasc.org", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1>Hello world</h1>", // html body
    });
    
    console.log("Message sent: %s", info.messageId);

    res.send("response sended from sendMail file")
}

// main().catch(console.error);



// async..await is not allowed in global scope, must use a wrapper


module.exports = sendsMails