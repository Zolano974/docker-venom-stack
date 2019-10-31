const mongoose = require("mongoose")
const PollFeature = require('./PollFeature')
const Project = require('./project')

let Schema = mongoose.Schema;

const PollFeatureSchema = new Schema({
    id: Number,
    project: Project,
    features: [PollFeature],
    beginDate: Date,
    endDate: Date,
    key: String
})

//export model
var PollProject = mongoose.model("PollProject", PollProjectSchema)
module.exports = PollProject