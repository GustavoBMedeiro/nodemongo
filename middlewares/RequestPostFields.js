const {body} = require('express-validator')

module.exports = {
    validateFields: (method) => {
        
        const fieldsValidate = [
            body('title').not().isEmpty().trim().escape(),
            body('slug').not().isEmpty().trim().escape(),
            body('content').not().isEmpty().trim().escape(),
            body('category').not().isEmpty().isNumeric().escape()
        ]

        switch(method){
            case 'store': {
                return fieldsValidate   
            }

            case 'update': {
                return fieldsValidate
            }
        }
    }
}