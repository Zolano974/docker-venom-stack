const mongoose = require('mongoose')
const UserSchema = require('../schema/user')

var User = mongoose.model("User", UserSchema);

module.exports = User;