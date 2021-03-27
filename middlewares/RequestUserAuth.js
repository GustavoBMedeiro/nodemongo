const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (passport) => {

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
        User.findOne({email: email }).then((user) =>{

            if(!user)
                return done(err, false, {error: 'Conta inexistente.'})
            
            bcrypt.compare(password, user.password, (err, result) => {
                if(result){
                    return done(null, user)
                }else{
                    return done(null, false, {error: 'Senha incorreta'})
                }
            })

        })  
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}