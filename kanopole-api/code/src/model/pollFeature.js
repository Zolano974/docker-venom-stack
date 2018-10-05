const mongoose = require('mongoose')
const PollFeatureSchema = require('../schema/pollFeature')

var PollFeature = mongoose.model("PollFeature", PollFeatureSchema)

module.exports = PollFeature