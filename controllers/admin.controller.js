const AccSam = require('../models/accsam.model')
const modelAccGhoul = require("../models/account.model")
var accounts = [{
      name: '108',
      weapon: 'taki',
      level: '1000',
      img: '1',
   },
   {
      name: '102',
      weapon: 'kosshi',
      level: '2000',
      img: '2',
   },
   {
      name: '108',
      weapon: 'taki',
      level: '1000',
      img: '1',
   },
   {
      name: '102',
      weapon: 'kosshi',
      level: '2000',
      img: '2',
   },
]
module.exports.getaccsam = async (req, res) => {
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

   res.render('admin/accsam', {
      currentPage: parseInt(page),
      Sams: Samspages[page],
      pages: Samspages.length,
   })
}
module.exports.getIndex = (req, res) => {
   res.render('admin/index')
}
module.exports.postIndex = (req, res) => {}
module.exports.postaccsam = async (req, res) => {}
module.exports.getDelete = async (req, res) => {
   console.log(req.params.id)
   res.render('delete', {
      id: req.params.id,
   })
}

module.exports.postDelete = async (req, res) => {
   await AccSam.findByIdAndDelete(req.params.id, (err, resq) => {
      if (err) {
         console.log(err)
      } else {
         console.log(resq)
      }
   })
   res.redirect('/admin')
}
module.exports.getGhoul = async (req, res) => {
   accounts = await modelAccGhoul.find({}, err => {
      if (err)
         console.log(err)
   })
   res.render('admin/ghoul', {
      accounts: accounts,
   })
}
module.exports.postGhoul = async (req, res) => {
   console.log(req.file)
   req.body.img = req.file.path.split("\\").slice(1).join('/')
   console.log(req.body)
   await modelAccGhoul.insertMany(req.body)
   res.redirect('/admin/ghoul')
}
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