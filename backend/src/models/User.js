const mongoose = require("mongoose");
const validator = require("validator");


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {          // check if the string is an email (.isEmail(str,[option]))
                throw new Error("Email is Invalid");
            }
        }
    },
    phoneno: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: String,
        require: true,
    }
})

const Users = new mongoose.model("user", UserSchema);

module.exports = Users;








