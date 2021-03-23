const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const categoryRouter = express.Router()

categoryRouter.get('/', CategoryController.index)
categoryRouter.get('/show/:id', CategoryController.show)

categoryRouter.get('/create', CategoryController.create)
categoryRouter.post('/store', CategoryController.store)

categoryRouter.get('/edit/:id', CategoryController.edit)
categoryRouter.put('/update', CategoryController.update)

categoryRouter.delete('/delete', CategoryController.delete)


module.exports = categoryRouter