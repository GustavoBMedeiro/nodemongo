const express = require('express')
const AuthController = require('../controllers/AuthController')
const authRouter = express.Router()

const { validateFields } = require('../middlewares/RequestAuthFields')

authRouter.get('/login', AuthController.userSignIn)
authRouter.post('/login', validateFields('signIn'), AuthController.signIn)

authRouter.get('/cadastrar', AuthController.userRegister)
authRouter.post('/cadastrar', validateFields('register'), AuthController.register)

authRouter.get('/sair', AuthController.signOut)

module.exports = authRouter