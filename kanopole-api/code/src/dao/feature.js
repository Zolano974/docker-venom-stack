const mongoose = require("mongoose")

let Schema = mongoose.Schema;

//schema
const FeatureSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    userValue: Number,
    cost: Number,
    order: Number,
})

//model
const Feature = mongoose.model("Feature", FeatureSchema)

//export model and schema
exports.FeatureSchema = FeatureSchema
exports.FeatureDao = Feature