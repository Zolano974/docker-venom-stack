const service = require('../services/project')
const corsquery = require('../lib/corsquery')
const Joi = require('joi') 	            //inputs validation

const projectRoutes = [

    //GET projectS
    {
        method: 'GET',
        path: '/projects',
        handler: service.getAll,
        config: {
            // auth: {
            //     strategy: 'token'
            // },
            cors: true
        }
    },
    // GET project /ID
    {
        method: 'GET',
        path: '/project/{id}',
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
    //CREATE project (POST)
    {
        method: 'POST',
        path: '/project',
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
  
    //UPDATE project (PUT)
    {
        method: 'PUT',
        path: '/project/{id}',
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
 
    //DELETE project
    {
        method: 'DELETE',
        path: '/project/{id}',
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

    
    //OPTIONS project
    {
        method: 'OPTIONS',
        path: '/projects',
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
        path: '/project',
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
        path: '/project/{id}',
        handler: (request, reply) => {
            corsquery.handle(reply)
        },
        config: {
            cors: true
        }
    },
]

module.exports = projectRoutes