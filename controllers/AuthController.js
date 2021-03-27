const passport = require('passport')
const validationErrors = require('../middlewares/RequestValidationErrors')
require('../middlewares/RequestUserAuth')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    
    userSignIn(req, res){
        res.render('./auth/login', {title: 'BLOG | Acesso'})
    },

    signIn(req, res, next){
        
        const hasErrors = validationErrors(req)
        
        if(hasErrors){
            return res.redirect('back')
        }

        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect : '/auth/login',
            failureFlash: true
        })(req, res, next)
    },

    userRegister(req, res){
        res.render('./auth/register', {title: 'BLOG | Cadastro'})
    },

    register(req, res){
        const hasErrors = validationErrors(req)
        
        if(hasErrors)
            res.redirect('back')

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        if(user.password !== req.body.password_confirm){
            req.flash('error_message', 'Confirmação da senha foi inválida, às senhas não correspondem.')
            return res.redirect('back')
        }

        User.findOne({email: user.email}).then((result) => {
            if(!result){
                bcrypt.hash(user.password, 10, (err, hash) => {
                    if(err){
                        req.flash('error_message', 'Houve um erro ao cadastrar a senha do usuário')
                        res.redirect('back')
                    }

                    user.password = hash
                    new User(user).save().then(() =>{
                        req.flash('success_message', 'Usuário cadastrado com sucesso')
                        res.redirect('../auth/login')
                    }).catch((err) => {
                        req.flash('error_message', 'Houve um erro ao cadastrar o usuário. | ERROR : ' + err)
                        res.redirect('back')
                    })
                })
            }else{
                req.flash('error_message', 'Já existe um usuário cadastrado com este email')
                res.redirect('back')
            }
        })

    },

    signOut(req, res){

    },

}