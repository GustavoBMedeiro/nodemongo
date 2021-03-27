const {model, Schema} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email:{type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true, trim: true},
}, {timestamps: true})

const User = model('users', UserSchema)

module.exports = User