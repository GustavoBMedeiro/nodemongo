const mongoose = require('mongoose')
const {Schema, model} = mongoose

const CategorySchema = new Schema({
    name: { type: String, require: true },
    description: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
})

const Category = model('categories', CategorySchema)

module.exports = Category