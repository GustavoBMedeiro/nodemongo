module.exports = {
    isAuth: (req, res, next) => {
        if(req.isAuthenticated())
            return next()
        
        req.flash('error_message', 'Faça login para acessar a plataforma.')
        res.redirect('/')
    }
}