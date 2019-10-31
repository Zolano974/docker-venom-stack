const {ProjectDao} = require("../dao/project");
const {FeatureDao} = require("../dao/feature");

const service = {
  //ADD FEATURE
  addFeature: async (request, reply) => {
    let id = request.params.id;
    let feature = request.payload;

    //we fetch the project
    ProjectDao.findById(id, function(err, project) {
      if (err) reply({ error: err });

      //we add the feature as child
      // project.features.push(...feature)
      project.features.push(new FeatureDao(...feature));

      //we persist in DB
      project.save(function(err) {
        if (err)
          reply({
            error: err
          });
        reply({
          error: null,
          data: project
        });
      });
    });
  },
  //UPDATE FEATURE
  updateFeature: async (request, reply) => {
    let id = request.params.id;
    let fid = request.params.fid;

    let feature = request.payload;

    //we fetch the project
    ProjectDao.findById(id, function(err, project) {
      if (err) reply({ error: err });
      //we remove the re-add the feature to update it
      project.features.id(fid).remove();
      // project.features.push(...feature)
      project.features.push(new FeatureDao(...feature));

      //we persist in DB
      project.save(function(err) {
        if (err)
          reply({
            error: err
          });
        reply({
          error: null,
          data: project
        });
      });
    });
  },
  //REMOVE FEATURE
  removeFeature: async (request, reply) => {
    let id = request.params.id;
    let fid = request.params.fid;

    //we fetch the project
    ProjectDao.findById(id, function(err, project) {
      if (err) reply({ error: err });
      //we remove the re-add the feature to update it
      project.features.id(fid).remove();

      //we persist in DB
      project.save(function(err) {
        if (err)
          reply({
            error: err
          });
        reply({
          error: null,
          data: project
        });
      });
    });
  },
  getFeatures: async (request, reply) => {
    let id = request.params.id;

    //we fetch the project
    ProjectDao.findById(id, function(err, project) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: project.features
      });
    });
  },
  //GET ALL
  getAll: async (request, reply) => {
    ProjectDao.find({}, function(err, projects) {
      if (err) reply({ error: err });

      reply({
        error: null,
        data: projects
      });
    });
  },
  //GET BY ID
  getById: async (request, reply) => {
    let id = request.params.id;

    ProjectDao.findById(id, function(err, project) {
      if (err) reply({ error: err });

      reply({
        error: null,
        data: project
      });
    });
  },
  //CREATE
  create: async (request, reply) => {
    let entity = request.payload;

    ProjectDao.create(...entity, function(err, project) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: project
      });
    });
  },
  //UPDATE
  update: async (request, reply) => {
    let entity = request.payload;

    ProjectDao.findOneAndUpdate(...entity, ...entity, function(err, project) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: project
      });
    });
  },
  //DELETE
  delete: async (request, reply) => {
    let entity = request.payload;

    ProjectDao.deleteOne(...entity, function(err) {
      if (err) reply({ error: err });
      reply({
        error: null,
        data: true
      });
    });
  }
};

module.exports = service;
