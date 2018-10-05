//import resources for each resource
const userRoutes = require('./routes/user')
const featureRoutes = require('./routes/feature')
const projectRoutes = require('./routes/project')

const routes =  userRoutes                  //USERS
                .concat(featureRoutes)      //FEATURES
                .concat(projectRoutes)      //PROJECTS

module.exports = routes