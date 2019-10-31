const service = require("../services/pollProject");
const corsquery = require("../lib/corsquery");
const Joi = require("joi"); //inputs validation

const pollProjectoutes = [
  //GET projectS
  {
    method: "GET",
    path: "/poll-projects",
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
    method: "GET",
    path: "/poll-project/{id}",
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
  //CREATE poll-project from project (POST)
  {
    method: "POST",
    path: "/poll-project",
    handler: service.create,
    config: {
      // auth: {
      //     strategy: 'token'
      // },
      validate: {
        params: {
          pid: Joi.number().integer()
        }
      },
      cors: true
    }
  },

  //OPTIONS project
  {
    method: "OPTIONS",
    path: "/poll-project/{id}/features",
    handler: (request, reply) => {
      corsquery.handle(reply);
    },
    config: {
      cors: true
    }
  },

  //OPTIONS project
  {
    method: "OPTIONS",
    path: "/poll-project/{id}/feature/{fid}",
    handler: (request, reply) => {
      corsquery.handle(reply);
    },
    config: {
      cors: true
    }
  }
];

module.exports = projectFeatureRoutes;
