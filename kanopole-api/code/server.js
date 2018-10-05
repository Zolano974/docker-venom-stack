'use strict';

const Hapi = require('hapi')	                //REST API framework

const HapiAuthJwt = require('hapi-auth-jwt')   //auth JWT

const jwt = require('jsonwebtoken')            //JWT

const routes = require('./src/routes')              //Routes

const private_key = require('./src/lib/privatekey')     //privatekey

// Create a server with a host and port
const server = new Hapi.Server();

//dbh for mongoDB
const mongoose = require('mongoose')

var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
mongoose.connect(`mongodb://${DATABASE_URL}/kanopole`);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});


//set up server connection
server.connection({
    host: '0.0.0.0',
    port: 3000
});

// SETUP SERVER
server.register(HapiAuthJwt, (err) => {

    //on définit la stratégie d'authent
    server.auth.strategy('token', 'jwt', {
        key: private_key,
        verifyOptions: {
            algorithms: ['HS256'],
        }
    });

    //on ajoute les routes issues de routes.js
    routes.forEach((route) => {
        console.log( `attaching ${ route.method } route ${ route.path }` )
        server.route( route )
    });

});

//Launch
server.start((err) => {
    if (err) {
        console.error('error handled');
        console.error(err);
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
