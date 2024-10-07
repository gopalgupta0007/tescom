const Users = require("../models/User");

const getAllUser = async (req, res) => {
    let users;
    try {
        users = await Users.find();
        if (!users) {
            return res.status(500).json({ massage: "unexpected error occured!" });
        }
    } catch (err) {
        return res.status(500).send(err);
    }
    return res.status(200).json({ users });
}

const storeData = async (req, res) => {
    let token;
    let userFound;
    try {
        let is_password_correct;
        const { email, password } = req.body;
        if (!email || !password) { res.status(400).json({ massage: "invalid input data" }); }
        userFound = await Users.findOne({ email });
        if (userFound) {
            is_password_correct = await bcrypt.compare(password, userFound.password)
        } else {
            res.status(500).json({ massage: "data not found" })
        };
        if (!is_password_correct) { res.status(500).json({ massage: "data not found" }) };

        //jwt => jsonwebtoken
        token = await userFound.generateAuthToken();
        console.log("token =>", token);
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 25892000000), // which is 25892000000=30days(30day * 24hour * 60mint * 60sec * 1000millisec)
            httpOnly: true
        })
    } catch (err) {
        return res.status(500).send(err);
    }
    return res.status(200).send({ massage: "login successfull", userFound });
}

module.exports = { getAllUser, storeData }