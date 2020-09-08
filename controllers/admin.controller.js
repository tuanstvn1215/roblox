const phantrang = require('../function/phantrang')

const AccSam = require('../models/accsam.model')

const modelAccGhoul = require("../models/account.model")
module.exports.getaccsam = async (req, res) => {
   var Sams = await AccSam.find()
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
   await AccSam.findByIdAndDelete(req.params.id)
   res.redirect('/admin')
}
module.exports.getGhoul = async (req, res) => {
   accounts = await modelAccGhoul.find({})
   res.render('admin/ghoul', {
      accounts: accounts,
   })
}
module.exports.postGhoul = async (req, res) => {
   req.body.img = req.file.path.split("\\").slice(1).join('/')
   await modelAccGhoul.insertMany(req.body)
   res.redirect('/admin/ghoul')
}