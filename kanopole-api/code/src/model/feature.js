const mongoose = require('mongoose')
const FeatureSchema = require('../schema/feature')

var Feature = mongoose.model("Feature", FeatureSchema)

module.exports = Feature