const express = require('express')
const SiteController = require('../controllers/SiteController')

const siteRouter = express.Router()

siteRouter.get('/', SiteController.index)
siteRouter.get('/login', SiteController.signIn)
siteRouter.get('/cadastrar', SiteController.register)
siteRouter.get('/sobre', SiteController.about)
siteRouter.get('/projeto', SiteController.project)
siteRouter.get('/contato', SiteController.contact)

module.exports = siteRouter
