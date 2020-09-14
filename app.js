const mongoose = require('./db')
const express = require('express')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const serect = 'asdasdasdasd'
const auth = require('./middiewares/authmiddleware')
const transactionRouter = require('./routes/transaction.route')
const loginRouter = require('./routes/login.route')
const indexRouter = require('./routes/index.route')
const userRouter = require('./routes/user.route')
const adminRouter = require('./routes/admin.route')
const accountRouter = require('./routes/account.route')

const app = express()
var port = 8800

app.set('views', './views')
app.set('view engine', 'pug')

app.use(cookieParser(serect))
app.use(express.json())
app.use(
   express.urlencoded({
      extended: true,
   })
)
app.use(express.static('public'))
app.use(auth.auth)
app.use(userRouter)
app.use(transactionRouter)
app.use(indexRouter)
app.use(loginRouter)
app.use(accountRouter)
app.use(auth.adminrole, adminRouter)
app.get('/account/:id', (req, res) => {
   res.render('account/index', {
      id: req.params.id,
   })
})

app.listen(process.env.PORT || port)