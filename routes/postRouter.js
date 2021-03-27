const express = require('express')
const PostController = require('../controllers/PostController')
const postRouter = express.Router()

const { validateFields } = require('../middlewares/RequestPostFields')

postRouter.get('/', PostController.index)
postRouter.get('/show/:id', PostController.show)

postRouter.get('/create', PostController.create)
postRouter.post('/store', validateFields('store'), PostController.store)

postRouter.get('/edit/:id', PostController.edit)
postRouter.put('/update', validateFields('update'), PostController.update)

postRouter.delete('/delete', PostController.delete)

module.exports = postRouter