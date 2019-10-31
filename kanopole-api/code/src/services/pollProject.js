const {PollProjectDao} = require("../dao/pollProject");
const {ProjectDao} = require("../dao/project");
const {PollFeatureDao} = require("../dao/pollFeature");

const service = {
  //UPDATE pollFeature
  answerFeature: async (request, reply) => {
    let id = request.params.id;
    let fid = request.params.fid;

    let functionnalAnswer = request.payload.functionnal;
    let dysfunctionnalAnswer = request.payload.dysfunctionnal;

    //we fetch the pollProject
    PollProjectDao.findById(id, function(err, pollProject) {
      if (err) reply({ error: err });

      //we fetch the re-add the pollFeature to update it
      let feature = pollProject.features.id(fid);

      //we use the custom setter to propagate answer and increment counters
      feature.answer = {
        functionnal: functionnalAnswer,
        dysfunctionnal: dysfunctionnalAnswer
      };

      // pollProject.features.push(...pollFeature)
      pollProject.features.push(feature);

      //we persist in DB
      pollProject.save(function(err) {
        if (err) reply({ error: err });
        reply({
          error: null,
          data: pollProject
        });
      });
    });
  },

  getFeatures: async (request, reply) => {
    let id = request.params.id;

    //we fetch the pollProject
    PollProjectDao.findById(id, function(err, pollProject) {
      if (err) reply({ error: err });

      reply({
        error: null,
        data: pollProject.features
      });
    });
  },

  //GET ALL
  getAll: async (request, reply) => {
    PollProjectDao.find({}, function(err, pollProjects) {
      if (err) reply({ error: err });

      reply({
        error: null,
        data: pollProjects
      });
    });
  },
  //GET BY ID
  getById: async (request, reply) => {
    let id = request.params.id;

    PollProjectDao.findById(id, function(err, pollProject) {
      if (err) reply({ error: err });

      reply({
        error: null,
        data: pollProject
      });
    });
  },
  //CREATE
  create: async (request, reply) => {
    let projectId = request.params.pid;

    ProjectDao.findById(projectId, function(err, project) {
      if (err) reply({ error: err });

      //TODO: initiate poll-project
    });
  },
  //UPDATE
  update: async (request, reply) => {
    let entity = request.payload;

    PollProjectDao.findOneAndUpdate(...entity, ...entity, function(
      err,
      pollProject
    ) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: pollProject
      });
    });
  },
  //DELETE
  delete: async (request, reply) => {
    let entity = request.payload;

    PollProjectDao.deleteOne(...entity, function(err) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: true
      });
    });
  }
};

module.exports = service;
