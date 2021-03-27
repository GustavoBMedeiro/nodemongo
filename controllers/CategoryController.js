const Category = require('../models/Category')
const validationErrors = require('../middlewares/RequestValidationErrors')

module.exports = {

    index(req, res){
        Category.find().sort({createdAt: 'desc'}).then((categories) => {
            res.render('./dashboard/category/index', 
                {
                    categories: categories.map(category => category.toJSON())
                }
            )

        }).catch((err) => {

            req.flash('error_message', 'Não foi possivel listar as categorias. |ERROR: ' + err)
            res.redirect('back')

        })
    },

    show(req, res){

    },

    create(req, res){
        res.status(200).render('./dashboard/category/create')
    },

    async store(req, res){
        try{ 
            const hasErrors = validationErrors(req)
            
            if(hasErrors)
                return res.redirect('back')

            const category = {name: req.body.name, description:req.body.description}
           
            new Category(category).save().then(() => {

                req.flash('success_message', 'Uma nova categoria foi registrada com sucesso.')
                res.redirect('/category')

            }).catch((err) => {

                req.flash('error_message', 'Não foi possível registrar uma nova catergoria | ERROR: ' + err)
                res.redirect('back')
                console.log("houve um erro ao salvar os dados: " + err)

            })

        }catch(err){

            req.flash('error_message', 'Não foi possível registrar uma nova catergoria | ERROR: ' + err)
            res.redirect('back')
            console.log("houve um erro ao salvar os dados: " + err)

        }
       
    },

    edit(req, res){
        const id = req.params.id
        Category.findOne({_id: id}).then((category) => {
            res.render('./dashboard/category/edit', {category: category.toJSON()})
        })
    },

    async update(req, res){
        try{
            const hasErrors = validationErrors(req)
            
            if(hasErrors)
                return res.redirect('back')

            Category.findOne({'_id': req.body._id}).then((category) => {
                
                category.name = req.body.name
                category.description = req.body.description
                category.updatedAt = Date.now()

                category.save().then(() => {
                    req.flash('success_message', 'Dados atualizados com sucesso')
                    res.redirect('/category')
                }).catch((err) => {
                    req.flash('error_message', 'Não foi possível atualizar os dados | ERROR : ' + err)
                    res.redirect('back')
                })

            }).catch((err) => {
                req.flash('error_message', 'Não foi possível editar a categoria. | ERROR : ' + err)
                res.redirect('back')
            })
        }catch(err){
            req.flash('error_message', 'Não foi possível validar os dados. | ERROR : ' + err)
            res.redirect('back')
        }
        
    },

    delete(req, res){
        const id = req.body.id
        Category.remove({'_id': id}).then(() => {
            req.flash('success_message', 'A categoria foi removida com sucesso')
            res.redirect('back')
        }).catch((err) => {
            req.flash('error_message', 'Ouve um erro ao remover categoria. | ERROR : ' + err)
            res.redirect('back')
        })
    },
       
}