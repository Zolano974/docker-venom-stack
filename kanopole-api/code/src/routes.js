//import resources for each resource
const userRoutes = require('./routes/user')
const projectRoutes = require('./routes/project')
const projectFeatureRoutes = require('./routes/feature')

const routes =  userRoutes                  //USERS
                .concat(projectRoutes)      //PROJECTS

module.exports = routes