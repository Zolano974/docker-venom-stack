const PollProjectModel = require('../model/pollProject')
const PollFeatureModel = require('../model/pollFeature')

const service = {


    //UPDATE pollFeature
    answerFeature: async (request, reply) => {

        let id = request.params.id
        let fid = request.params.fid

        let functionnalAnswer = request.payload.functionnal
        let dysfunctionnalAnswer = request.payload.dysfunctionnal

        //we fetch the pollProject
        PollProjectModel.findById(id, function (err, pollProject) {

            if (err) reply({
                error: err
            })

            //we remove the re-add the pollFeature to update it
            let feature = pollProject.features.id(fid)
            
            // pollProject.features.push(...pollFeature)
            pollProject.features.push(new PollFeatureModel(...pollFeature))

            //we persist in DB
            pollProject.save(function(err){
                if(err) reply({
                    error: err
                })
                reply({
                    error: null,
                    data: pollProject
                })
            })

        })

    },
   
    getFeatures: async (request, reply) => {
        
        let id = request.params.id

         //we fetch the pollProject
         PollProjectModel.findById(id, function (err, pollProject) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: pollProject.features
            })

        })
    },

    //GET ALL
    getAll: async (request, reply) => {

        PollProjectModel.find({}, function (err, pollProjects) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: pollProjects
            })
        })
    },
    //GET BY ID
    getById: async (request, reply) => {

        let id = request.params.id

        PollProjectModel.findById(id, function (err, pollProject) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: pollProject
            })
        })
    },
    //CREATE
    create: async (request, reply) => {

        let entity = request.payload

        PollProjectModel.create(...entity, function (err, pollProject) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: pollProject
            })
        })
    },
    //UPDATE
    update: async (request, reply) => {

        let entity = request.payload

        PollProjectModel.findOneAndUpdate(...entity, ...entity, function (err, pollProject) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: pollProject
            })
        })

    },
    //DELETE
    delete: async (request, reply) => {

        let entity = request.payload

        PollProjectModel.deleteOne(...entity, function (err) {
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

module.exports = service