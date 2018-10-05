const mongoose = require("mongoose")
const Feature = require('../schema/feature')

let Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    objectives: String,
    cost: Number,
    features: [Feature]
})

module.exports = ProjectSchema