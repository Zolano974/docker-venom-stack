const UserModel = require('../model/user')
const corsquery = require('../lib/corsquery')

const service = {

    //GET ALL
    getAll: async (request, reply) => {

        UserModel.find({}, function (err, users) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: users
            })
        })
    },
    //GET BY ID
    getById: async (request, reply) => {

        let id = request.params.id

        UserModel.findById(id, function (err, user) {

            if (err) reply({
                error: err
            })

            reply({
                error: null,
                data: user
            })
        })
    },

    create: async (request, reply) => {

        let entity = request.payload

        //Encryption
        let salt = Bcrypt.genSaltSync();
        let encryptedPassword = Bcrypt.hashSync(entity.password, salt);

        let newUser = {
            username: entity.username,
            password: encryptedPassword,
            name: entity.name,
            mail: entity.mail,
        }

        UserModel.create(...newUser, function (err, user) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: user
            })
        })
    },
    //UPDATE
    update: async (request, reply) => {

        let entity = request.payload

        UserModel.findOneAndUpdate(...entity, ...entity, function (err, user) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: user
            })
        })

    },

    //DELETE
    delete: async (request, reply) => {

        let entity = request.payload

        UserModel.deleteOne(...entity, function (err) {
            if (err) reply({
                error: err
            })
            reply({
                error: null,
                data: true
            })
        })
    },

    //AUTHENTICATE
    authenticate: async (request, reply) => {

        //on gère le cas OPTIONS: on renvoie les bons headers
        if (request.method === 'options') {
            optionsquery.handle(reply)
            return
        }

        // This is a ES6 standard
        const {
            username,
            password
        } = request.payload

        try {
            var token = await UserModel.authenticate(username, password)

            var response = (token) ? {
                error: null,
                token: token
            } : {
                error: true,
                errMessage: 'Auth failed',
                token: null,
            }

            reply(response)

        } catch (err) {
            console.log(err)
            reply(err)
        }

    },
}

module.exports = service