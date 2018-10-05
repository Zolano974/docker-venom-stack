var mongoose = require("mongoose")

var Schema = mongoose.Schema;

let FeatureSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    userValue: Number,
    cost: Number
})

module.exports = FeatureSchema