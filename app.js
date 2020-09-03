const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const fs = require('fs')
const indexRouter = require('./routes/index.route')
const loginRouter = require('./routes/login.route')
const signupRouter = require('./routes/signup.route')
var port = 8800
const mongoose = require('mongoose')
const url =
   'mongodb+srv://tuanstvn1214:tuanstvn1214@cluster0.4hiz7.gcp.mongodb.net/roblox?retryWrites=true&w=majority'
mongoose.connect(
   url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   },






   (err) => {
      if (err) {
         console.log(`không thể kết nối Mongodb, lỗi:${err}`)
      } else {
         console.log('kết nối Mongodb thành công')
      }
   }
)
const RobloxaccSchema = new mongoose.Schema({
   name: String,
})
const AccSam = mongoose.model('AccSam', RobloxaccSchema, 'robloxAccSam')
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/coppy/id:', (req, res) => {})

app.use(indexRouter)

app.use(loginRouter)
app.use(signupRouter)
app.get('/admin', async (req, res) => {
   var Sams = await AccSam.find((err) => {
      if (err) {
         console.log(err)
      } else {}
   })
   // var acc = await fs.readFileSync('New.json', {
   //    encoding: 'utf8'
   // })
   // acc = JSON.parse(acc)
   // for (ac of acc) {
   //    AccSam.insertMany({
   //       name: ac
   //    }, (err) => {
   //       if (err) {
   //          console.log(err)
   //       } else {
   //          console.log('thêm thành viên thành công' + ac)
   //       }
   //    })
   // }
   var page = req.query.page || 0
   var Samspages = phantrang(Sams, 13)

   res.render('index', {
      currentPage: parseInt(page),
      Sams: Samspages[page],
      pages: Samspages.length,
   })
})
app.get('/delete/:id', async (req, res) => {
   console.log(req.params.id)

   res.render('delete', {
      id: req.params.id,
   })
})

app.post('/delete/:id', async (req, res) => {
   await AccSam.findByIdAndDelete(req.params.id, (err, resq) => {
      if (err) {
         console.log(err)
      } else {
         console.log(resq)
      }
   })
   res.redirect('/')
})
var phantrang = (item, perpage) => {
   var temp = item
   var i = 0
   var tempitem = []
   while (i < temp.length / perpage) {
      tempitem[i] = temp.slice(i * perpage, i * perpage + perpage)
      i = i + 1
   }
   return tempitem
}
app.listen(process.env.PORT || port)