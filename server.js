const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')

const mongoose = require('mongoose')


const siteRouter = require('./routes/siteRouter')
const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')
const categoryRouter = require('./routes/categoryRouter')

const app = express()
const port = process.env.PORT || 3000;

app.use(siteRouter)
app.use('/auth', authRouter)
app.use('/post', postRouter)
app.use('/category', categoryRouter)

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(session({
    secret:"",
    resave: false,
    saveUninitialized: true
}))

app.use(flash())

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))


app.listen(port, () => {
    console.log("Server is running at http://localhost:3000")
})