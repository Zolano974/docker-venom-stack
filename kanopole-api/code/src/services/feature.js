const FeatureModel = require('../model/feature')

const service = {

    //GET ALL
    getAll: async (request, reply) => {

        FeatureModel.find({}, function (err, features) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: features
            })
        })
    },
    //GET BY ID
    getById: async (request, reply) => {

        let id = request.params.id

        FeatureModel.findById(id, function (err, feature) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: feature
            })
        })
    },
    //CREATE
    create: async (request, reply) => {

        let entity = request.payload

        FeatureModel.create(...entity, function (err, feature) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: feature
            })
        })
    },
    //UPDATE
    update: async (request, reply) => {

        let entity = request.payload

        FeatureModel.findOneAndUpdate(...entity, ...entity, function (err, feature) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: feature
            })
        })

    },

    //DELETE
    delete: async (request, reply) => {

        let entity = request.payload

        FeatureModel.deleteOne(...entity, function (err) {
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