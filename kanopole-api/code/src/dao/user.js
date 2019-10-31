const private_key = require('../../lib/privatekey') //PRIVATE KEY
const jwt = require('jsonwebtoken') //JWT
const Bcrypt = require('bcrypt') // encryption

let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    name: String,
    mail: String,
});

//authentication static method
UserSchema.statics.authenticate = function (username, password) {

    //we fetch the given user
    let user = this.findOne({
        username: username
    }, function(error, user){

        if(error){
            console.log(error)
            return false
        }

        //we compare hashed passwords
        if (Bcrypt.compareSync(password, user.password)) {

            //we forge JWT token
            var token = jwt.sign({
                    username,
                    id: user.id,
                    group: "user",
                },
                private_key, {
                    algorithm: 'HS256',
                    expiresIn: '1h',
                }
            );
    
            return token
        }
        else{
            return false
        }

    })

}

//model
var User = mongoose.model("User", UserSchema);

//export model and schema
exports.UserSchema = UserSchema
exports.UserModel = User