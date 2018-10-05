const ProjectModel = require('../model/project')

const service = {

    //GET ALL
    getAll: async (request, reply) => {

        ProjectModel.find({}, function (err, projects) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: projects
            })
        })
    },
    //GET BY ID
    getById: async (request, reply) => {

        let id = request.params.id

        ProjectModel.findById(id, function (err, project) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: project
            })
        })
    },
    //CREATE
    create: async (request, reply) => {

        let entity = request.payload

        ProjectModel.create(...entity, function (err, project) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: project
            })
        })
    },
    //UPDATE
    update: async (request, reply) => {

        let entity = request.payload

        projectModel.findOneAndUpdate(...entity, ...entity, function (err, project) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: project
            })
        })

    },

    //DELETE
    delete: async (request, reply) => {

        let entity = request.payload

        ProjectModel.deleteOne(...entity, function (err) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: true
            })
        })
    },
}

module.exports = service;