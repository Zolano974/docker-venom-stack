const mongoose = require("mongoose")
const Feature = require('../schema/feature')
const Stats = require('../schema/stats')

let Schema = mongoose.Schema;

const PollFeatureSchema = new Schema({
    id: Number,
    feature: Feature,
    stats: Stats,
})

module.exports = PollFeatureSchema