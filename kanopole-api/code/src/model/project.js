const mongoose = require("mongoose")
const Feature = require('./feature')

let Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    objectives: String,
    cost: Number,
    features: [Feature]
})

//export model
var Project = mongoose.model("Project", ProjectSchema)
module.exports = Project