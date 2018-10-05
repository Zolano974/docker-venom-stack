//import resources for each resource
const userRoutes = require('./routes/user')
const featureRoutes = require('./routes/feature')

const routes =  userRoutes                  //USERS
                .concat(featureRoutes)      //FEATURES

module.exports = routes