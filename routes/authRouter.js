const express = require('express')
const AuthController = require('../controllers/AuthController')
const authRouter = express.Router()

authRouter.post('/logar', AuthController.signIn)
authRouter.post('/cadastrar', AuthController.register)
authRouter.get('/sair', AuthController.signOut)

module.exports = authRouter