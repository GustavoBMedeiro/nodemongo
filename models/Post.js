const mongoose = require('mongoose')
const { Schema, model } = mongoose

const PostSchema = new Schema({
    title: { type: String, required: true},
    slug : {type: String, required: true},
    content:{type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'categories', required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Post = model('posts', PostSchema)

module.exports = Post