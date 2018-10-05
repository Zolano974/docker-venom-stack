const service = require('../services/pollProject')
const corsquery = require('../lib/corsquery')
const Joi = require('joi') 	            //inputs validation

const projectFeatureRoutes = [

    //GET project's features
    {
        method: 'GET',
        path: '/poll-project/{id}/features',
        handler: service.getFeatures,
        config: {
            // auth: {
            //     strategy: 'token'
            // },
            cors: true
        }
    },


    //ANSWER poll for feature on project (PUT)
    {
        method: 'PUT',
        path: '/poll-project/{id}/feature/{fid}',
        handler: service.answerFeature,
        config: {

            // auth: {
            //     strategy: 'token'
            // },
            validate: {
                params: {
                    id: Joi.number().integer().required(),
                    fid: Joi.number().integer().required(),
                    functionnal: Joi.boolean().min(1).max(5).required(),
                    dysfunctionnal: Joi.boolean().min(1).max(5).required(),
                }
            },
            cors: true
        }
    },
    
    //OPTIONS project
    {
        method: 'OPTIONS',
        path: '/poll-project/{id}/features',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },

    //OPTIONS project
    {
        method: 'OPTIONS',
        path: '/poll-project/{id}/feature/{fid}',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },
]

module.exports = projectFeatureRoutes