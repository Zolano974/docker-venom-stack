const mongoose = require("mongoose")
const PollFeature = require('../schema/PollFeature')
const Project = require('../schema/project')

let Schema = mongoose.Schema;

const PollFeatureSchema = new Schema({
    id: Number,
    project: Project,
    features: [PollFeature],
    beginDate: Date,
    endDate: Date,
    key: String
})

module.exports = PollFeatureSchema