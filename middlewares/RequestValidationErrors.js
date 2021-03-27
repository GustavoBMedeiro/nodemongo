const {validationResult} = require('express-validator')

const validationErrors = (req, res, next) => {
    const errors = validationResult(req)

        if(!errors.isEmpty()){
            req.flash("error_message", "Preencha os campos corretamente")
            return true
        }else{
            return false
        }

}

module.exports = validationErrors