const bcrypt = require('bcrypt')
const transactionModel = require('../models/transaction.model')
const modelUser = require('../models/User.model')
const infoModel = require('../models/info.model')

module.exports.getIndex = async (req, res) => {
   res.render('shop/login');
}

module.exports.postIndex = async (req, res) => {
   var patt = /\w+/;

   if (req.body.name.match(patt) != req.body.name) {
      res.render('shop/login', {
         errs: ['Tài khoản chỉ bao gồm kí tự và số'],
         values: req.body
      })
      console.log(req.body.name)
      return
   }
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
   var flag = await bcrypt.compare(req.body.password, userdb.password)
   console.log(flag)
   if (!flag) {
      res.render('shop/login', {
         errs: ['Sai mật khẩu'],
         values: req.body
      })
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
   patt = /\w+/
   if (req.body.name.match(patt) != req.body.name) {
      res.render('shop/login', {
         errs: ['Tài khoản chỉ bao gồm kí tự và số'],
         values: req.body
      })
      console.log(req.body.name)
      return
   }

   var salt = await bcrypt.genSalt(10)
   req.body.password = await bcrypt.hash(req.body.password, salt)
   var tempuser = await modelUser.insertMany(req.body)
   await infoModel.insertMany({
      _id: tempuser[0]._id,
      name: tempuser[0].name,
      fullname: ':',
      email: ':',
      img: '',
      balance: 0
   })

   await transactionModel.insertMany({
      value: '0',
      balance_before: '0',
      account: 'tao tai khoan',
      balance_after: '0',
      userId: tempuser[0]._id,
      stage: 1
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