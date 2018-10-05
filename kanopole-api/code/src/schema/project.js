const mongoose = require("mongoose")
const FeatureSchema = require('../schema/feature')

let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    objectives: String,
    cost: Number,
    features: [FeatureSchema]
})

module.exports = ProjectSchema