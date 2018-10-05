const mongoose = require('mongoose')
const ProjectSchema = require('../schema/project')

var Project = mongoose.model("Project", ProjectSchema)

module.exports = Project