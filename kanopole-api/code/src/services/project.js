const ProjectModel = require('../model/project')
const FeatureModel = require('../model/feature')

const service = {

    //ADD FEATURE
    addFeature: async (request, reply) => {

        let id = request.params.id

        let feature = request.payload

        //we fetch the project
        ProjectModel.findById(id, function (err, project) {

            if (err) reply({
                error: err
            })

            //we add the feature as child
            // project.features.push(...feature)
            project.features.push(new FeatureModel(...feature))

            //we persist in DB
            project.save(function(err){
                if(err) reply({
                    error: err
                })
                reply({
                    error: null,
                    data: project
                })
            })

        })
    },
    //UPDATE FEATURE
    updateFeature: async (request, reply) => {

        let id = request.params.id
        let fid = request.params.fid

        let feature = request.payload

        //we fetch the project
        ProjectModel.findById(id, function (err, project) {

            if (err) reply({
                error: err
            })

            //we remove the re-add the feature to update it
            project.features.id(fid).remove()
            // project.features.push(...feature)
            project.features.push(new FeatureModel(...feature))

            //we persist in DB
            project.save(function(err){
                if(err) reply({
                    error: err
                })
                reply({
                    error: null,
                    data: project
                })
            })

        })

    },
    //REMOVE FEATURE
    removeFeature: async (request, reply) => {
        
        let id = request.params.id
        let fid = request.params.fid

        //we fetch the project
        ProjectModel.findById(id, function (err, project) {

            if (err) reply({
                error: err
            })

            //we remove the re-add the feature to update it
            project.features.id(fid).remove()

            //we persist in DB
            project.save(function(err){
                if(err) reply({
                    error: err
                })
                reply({
                    error: null,
                    data: project
                })
            })

        })
    },
    getFeatures: async (request, reply) => {
        
        let id = request.params.id

         //we fetch the project
         ProjectModel.findById(id, function (err, project) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: project.features
            })

        })
    },
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