const express = require('express')
const fs = require('fs')
const cookieParser = require('cookie-parser')
var serect='asdasdasdasd'
const auth = require('./middiewares/authmiddleware')
const indexRouter = require('./routes/index.route')
const loginRouter = require('./routes/login.route')
const adminRouter = require('./routes/admin.route')
const app = express()
var port = 8800

app.set('views', './views')
app.set('view engine', 'pug')

app.use(cookieParser(serect))
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))
app.use(express.static('public'))


// app.get('/coppy/id:', (req, res) => {})
app.use(auth.auth)

app.use(indexRouter)
app.use(loginRouter)
app.use(adminRouter)

app.listen(process.env.PORT || port)