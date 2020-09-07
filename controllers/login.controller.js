const Password = require('../function/Password')
const modelUser = require('../models/User.model');
const infoModel = require('../models/info.model')
module.exports.getIndex = async (req, res) => {
   res.render('shop/login');
}

module.exports.postIndex = async (req, res) => {
   var userdb = await modelUser.findOne({
      name: req.body.name
   }, (err) => {
      if (err) {
         console.log(err)
      }
   })
   if (!userdb) {
      res.render('shop/login', {
         errs: ['Tài khoản không tồn tại'],
         values: req.body
      })
      return
   }
   if (!(await Password.compare(req.body.password, userdb.password))) {
      res.render('shop/login', {
         errs: ['Sai mật khẩu'],
         values: req.body
      })
      return
   }
   res.cookie('_id', userdb._id, {
      signed: true,
      expires: new Date(Date.now() + 3600000)

   })
   res.redirect('/')


}


module.exports.getSignup = async (req, res) => {
   res.redirect('/login')
}

module.exports.postSignup = async (req, res) => {
   var userdb = await modelUser.findOne({
      name: req.body.name
   })
   if (userdb) {
      res.render('shop/login', {
         errs: ['Tài khoản đã tồn tại'],
         values: req.body
      })
      return
   }

   var tempuser = await modelUser.insertMany(req.body)

   await infoModel.insertMany({
      _id: tempuser[0]._id,
      name: tempuser[0].name,
      fullname: ':',
      email: ':',
      img: '',
      balance: 0
   })
   res.cookie('_id', tempuser[0]._id, {
      signed: true,
      expires: new Date(Date.now() + 3600000)
   })
   res.redirect('/login')

}
module.exports.getLogout = (req, res) => {
   res.clearCookie('_id')
   res.redirect('/')

}