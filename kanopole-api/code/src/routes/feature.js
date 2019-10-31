const service = require("../services/project");
const corsquery = require("../lib/corsquery");
const Joi = require("joi"); //inputs validation

const projectFeatureRoutes = [
  //GET project's features
  {
    method: "GET",
    path: "/project/{id}/features",
    handler: service.getFeatures,
    config: {
      // auth: {
      //     strategy: 'token'
      // },
      cors: true
    }
  },

  //CREATE FEATURE on project (POST)
  {
    method: "POST",
    path: "/project/{id}/feature",
    handler: service.addFeature,
    config: {
      // auth: {
      //     strategy: 'token'
      // },
      validate: {
        params: {
          // id: Joi.number().integer(),
          title: Joi.string()
            .alphanum()
            .min(10)
            .max(100)
            .required(),
          description: Joi.string()
            .alphanum()
            .min(10)
            .max(100),
          userValue: Joi.number().integer(),
          cost: Joi.number().integer()
        }
      },
      cors: true
    }
  },

  //UPDATE feature on project (PUT)
  {
    method: "PUT",
    path: "/project/{id}/feature/{fid}",
    handler: service.updateFeature,
    config: {
      // auth: {
      //     strategy: 'token'
      // },
      validate: {
        params: {
          id: Joi.number()
            .integer()
            .required(),
          fid: Joi.number()
            .integer()
            .required(),
          title: Joi.string()
            .alphanum()
            .min(10)
            .max(100)
            .required(),
          description: Joi.string()
            .alphanum()
            .min(10)
            .max(100),
          userValue: Joi.number().integer(),
          cost: Joi.number().integer()
        }
      },
      cors: true
    }
  },

  //DELETE feature on project (DELETE)
  {
    method: "DELETE",
    path: "/project/{id}/feature/{fid}",
    handler: service.updateFeature,
    config: {
      // auth: {
      //     strategy: 'token'
      // },
      validate: {
        params: {
          id: Joi.number()
            .integer()
            .required(),
          fid: Joi.number()
            .integer()
            .required()
        }
      },
      cors: true
    }
  },

  //OPTIONS project
  {
    method: "OPTIONS",
    path: "/project/{id}/features",
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
    path: "/project/{id}/feature",
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
    path: "/project/{id}/feature/{fid}",
    handler: (request, reply) => {
      corsquery.handle(reply);
    },
    config: {
      cors: true
    }
  }
];

module.exports = projectFeatureRoutes;
