const {body} = require('express-validator')

module.exports = {
    validateFields: (method) => {
        
        const fieldsValidateSignIn = [
            body('email').not().isEmpty().trim().escape(),
            body('password').not().isEmpty().trim().escape()
        ]

        const fieldsValidateRegister = [
            body('name').not().isEmpty().trim().escape(),
            body('email').not().isEmpty().trim().escape(),
            body('password').not().isEmpty().trim().escape(),
            body('password_confirm').not().isEmpty().trim().escape(),
        
        ]

        switch(method){
            case 'signIn': {
                return fieldsValidateSignIn  
            }

            case 'register': {
                return fieldsValidateRegister
            }
        }
    }
}