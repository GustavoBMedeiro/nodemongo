const {body} = require('express-validator')

module.exports = {
    validateFields: (method) => {
        
        const fieldsValidate = [
            body('name').not().isEmpty().trim().escape(),
            body('description').not().isEmpty().trim().escape()
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