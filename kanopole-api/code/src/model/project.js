var mongoose = require("mongoose")

var Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    objectives: Number,
    cost: Number
})

var Feature = mongoose.model("Fetaure", FeatureSchema)

module.exports = Feature