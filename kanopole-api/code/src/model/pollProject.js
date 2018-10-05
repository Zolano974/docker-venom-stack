const mongoose = require('mongoose')
const PollProjectSchema = require('../schema/pollProject')

var PollProject = mongoose.model("PollProject", PollProjectSchema)

module.exports = PollProject