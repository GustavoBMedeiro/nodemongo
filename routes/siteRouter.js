const express = require('express')
const SiteController = require('../controllers/SiteController')

const siteRouter = express.Router()

siteRouter.get('/', SiteController.index)
siteRouter.get('/logar', SiteController.login)
siteRouter.get('/cadastrar', SiteController.signIn)
siteRouter.get('/sobre', SiteController.about)
siteRouter.get('/projeto', SiteController.project)
siteRouter.get('/contato', SiteController.contact)

module.exports = siteRouter
