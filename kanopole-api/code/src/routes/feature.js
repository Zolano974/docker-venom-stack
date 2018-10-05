const service = require('../services/feature')
const corsquery = require('../lib/corsquery')
const Joi = require('joi') 	            //inputs validation

const featureRoutes = [

    //GET FEATURES
    {
        method: 'GET',
        path: '/features',
        handler: service.getAll,
        config: {
            // auth: {
            //     strategy: 'token'
            // },
            cors: true
        }
    },
    // GET feature /ID
    {
        method: 'GET',
        path: '/feature/{id}',
        handler: service.getById,
        config: {
            // auth: {
            //     strategy: 'token'
            // },
            validate: {
                params: {
                    id: Joi.number().integer()
                }
            },
            cors: true
        }
    },
    //CREATE feature (POST)
    {
        method: 'POST',
        path: '/feature',
        handler: service.create,
        config: {

            // auth: {
            //     strategy: 'token'
            // },
            validate: {
                params: {
                    // id: Joi.number().integer(),
                    title: Joi.string().alphanum().min(10).max(100).required(),
                    description: Joi.string().alphanum().min(10).max(100),
                    userValue: Joi.number().integer(),
                    cost: Joi.number().integer(),
                }
            },
            cors: true
        }
    },
    //UPDATE feature (PUT)
    {
        method: 'PUT',
        path: '/feature/{id}',
        handler: service.update,
        config: {

            // auth: {
            //     strategy: 'token'
            // },
            validate: {
                params: {
                    id: Joi.number().integer().required(),
                    title: Joi.string().alphanum().min(10).max(100).required(),
                    description: Joi.string().alphanum().min(10).max(100),
                    userValue: Joi.number().integer(),
                    cost: Joi.number().integer(),
                }
            },
            cors: true
        }
    },
    //DELETE feature
    {
        method: 'DELETE',
        path: '/feature/{id}',
        handler: service.delete,
        config: {

            // auth: {
            //     strategy: 'token'
            // },
            validate: {
                params: {
                    id: Joi.number().integer().required(),
                    title: Joi.string().alphanum().min(10).max(100).required(),
                    description: Joi.string().alphanum().min(10).max(100),
                    userValue: Joi.number().integer(),
                    cost: Joi.number().integer(),
                }
            },
            cors: true

        }
    },

    
    //OPTIONS feature
    {
        method: 'OPTIONS',
        path: '/features',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },
    //OPTIONS feature
    {
        method: 'OPTIONS',
        path: '/feature',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },
    //OPTIONS feature
    {
        method: 'OPTIONS',
        path: '/feature/{id}',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },
]

module.exports = featureRoutes