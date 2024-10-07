const mongoose = require("mongoose");
require('dotenv').config("../backend/.env");

const Connection = () => {
    // mongoose.connect(process.env.MONGO_URL, {})
    mongoose.connect('mongodb+srv://tescombusinessolution:ILxbCuQVh6WeTbbH@cluster0.xitss.mongodb.net/tescombusinessolution?retryWrites=true&w=majority&appName=Cluster0', {})
        .then(() => console.log("DB connected"))
        .catch(err => console.error(err))
}

module.exports = Connection;

// 103.190.14.140
// tescombusinessolution
// h379LCQ8XHV1zR3