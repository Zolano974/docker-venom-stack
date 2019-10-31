const mongoose = require("mongoose")
const {FeatureSchema} = require('./feature')

let Schema = mongoose.Schema;

//schema
const ProjectSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    objectives: String,
    cost: Number,
    features: [FeatureSchema]
})

//model
var Project = mongoose.model("Project", ProjectSchema);


//export schema
exports.ProjectSchema = ProjectSchema
exports.ProjectModel = Project