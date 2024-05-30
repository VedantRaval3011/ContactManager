const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "username is required"]
    },
    email: {
        type: String,
        require: [true, "username is required"],
        unique: [true, "email already taken"]
    },
    password: {
        type: String,
        require: [true, "password is required"]
    },
},{timestamps: true})

module.exports = mongoose.model("User",userSchema)