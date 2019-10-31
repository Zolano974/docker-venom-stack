const mongoose = require("mongoose")

let Schema = mongoose.Schema;

const FeatureSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    userValue: Number,
    cost: Number,
    order: Number,
})

//export model
var Feature = mongoose.model("Feature", FeatureSchema)
module.exports = Feature