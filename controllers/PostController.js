const Category = require('../models/Category')
const Post = require('../models/Post')

const validationErrors = require('../middlewares/RequestValidationErrors')

module.exports = {
    index(req, res){
        Post.find().populate('category').then((result) => {
            const posts = result.map(item => item.toJSON())
            res.render('./dashboard/post/index', {title: 'POSTAGEM | lista', posts: posts})
        })
    },

    show(req, res){

    },

    create(req, res){

        Category.find().then((result) => {

            const categories = result.map(item => item.toJSON())

            res.render('./dashboard/post/create', 
                {
                    title: 'POSTAGEM | adcionar',
                    categories: categories
                }
            )
        })
    },

    store(req, res){

        const hasErrors = validationErrors(req)

        if(hasErrors)
            return res.redirect('back')

        const post = {
            title : req.body.title,
            slug : req.body.slug,
            content: req.body.content,
            category: req.body.category,
        }

        new Post(post).save().then(() =>{
            req.flash('success_message', 'Postagem registrada com sucesso')
            res.redirect('/post')
        }).catch((err) => {
            req.flash('error_message', 'Houve um erro ao registrar uma nova postagem | ERROR: ' + err)
        })
    },

    edit(req, res){
        const id = req.params.id

        Post.findOne({'_id': id}).populate('category').then((result) => {
            const post = result.toJSON()

            Category.find().then((result) => {
                const categories = result.map(item => item.toJSON())
                res.render('./dashboard/post/edit', {title: 'POSTAGEM | edit', post: post, categories: categories})
            }).catch((err) => {
                req.flash('error_message', 'Houve um erro ao procurar pelas categorias. |ERROR : ' + err)
                res.redirect('/post')
            })
            
        }).catch((err) => {
            req.flash('error_message', 'Houve um erro ao procurar a postagem. |ERROR : ' + err)
            res.redirect('/post')
        })
  
    },

    update(req, res){
        const hasErrors = validationErrors(req)

        if(hasErrors)
            return res.redirect('back')

        
        
    },

    delete(req, res){

    },
       
}