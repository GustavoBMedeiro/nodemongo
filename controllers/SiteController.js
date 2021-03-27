'use-strict'

module.exports = {

    index(req, res){
        const title = 'Site Home'
        res.status(200).render('./site/index', {title}) 
    },

    signIn(req, res){
        const title = 'Acesso'
        res.status(200).render('./site/login', {title})
    },

    register(req, res){
        const title = 'Cadastro'
        res.status(200).render('./site/register', {title})
    },

    about(req, res){
        res.status(200).render('./site/about')
    },

    project(req, res){
        res.status(200).render('./site/project')
    },

    contact(req, res){
        res.status(200).render('./site/contact')
    }
}