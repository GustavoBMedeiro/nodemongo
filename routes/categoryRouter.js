const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const { isAuth } = require('../helpers/isAuth')
const categoryRouter = express.Router()

const { validateFields } = require('../middlewares/RequestCategoryFields')

categoryRouter.get('/', isAuth, CategoryController.index)
categoryRouter.get('/show/:id', isAuth, CategoryController.show)

categoryRouter.get('/create', isAuth, CategoryController.create)
categoryRouter.post('/store', validateFields('store') , CategoryController.store)

categoryRouter.get('/edit/:id', CategoryController.edit)
categoryRouter.put('/update', validateFields('update'), CategoryController.update)

categoryRouter.delete('/delete', CategoryController.delete)


module.exports = categoryRouter