const mongoose = require("mongoose")
const {PollFeatureSchema} = require('./PollFeature')
const {ProjectSchema} = require('./project')

let Schema = mongoose.Schema;

//schema
const PollFeatureSchema = new Schema({
    id: Number,
    project: ProjectSchema,
    features: [PollFeatureSchema],
    beginDate: Date,
    endDate: Date,
    key: String
})

//model
var PollProject = mongoose.model("PollProject", PollProjectSchema)

//export model and schema
exports.PollProjectSchema = PollProjectSchema
exports.PollProjectModel = PollProject