const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const fs = require('fs')
const indexRouter = require('./routes/index.route')
const loginRouter = require('./routes/login.route')
const adminRouter = require('./routes/admin.route')
var port = 8800

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}))
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')
// app.get('/coppy/id:', (req, res) => {})

app.use(indexRouter)
app.use(loginRouter)
app.use(adminRouter)

app.listen(process.env.PORT || port)