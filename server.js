const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
require('./middlewares/RequestUserAuth')(passport)

const siteRouter = require('./routes/siteRouter')
const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')
const categoryRouter = require('./routes/categoryRouter')
const { sessionVariables } = require('./helpers/sessionVars')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/banco_blog',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.engine('handlebars', handlebars({defaultLayout: 'main'}, {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret:"kdhjkhsakhkjiquo",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(sessionVariables)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(siteRouter)
app.use('/auth', authRouter)
app.use('/post', postRouter)
app.use('/category', categoryRouter)

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000")
})