const infoModel = require('../models/info.model')
const transactionModel = require('../models/transaction.model')
const acconutModel = require('../models/account.model')

module.exports.getIndex = async (req, res) => {
   transactions = await transactionModel.find({
      userId: res.locals.user._id,
   })
   res.render('shop/user/transaction', {
      transactions: transactions,
   })
}

module.exports.getCreate = async (req, res) => {
   account = await acconutModel.findById(
      req.params.id
   )
   res.render('shop/account/index', {
      balance: res.locals.user.balance - account.value,
      id: req.params.id
   })
}

module.exports.postCreate = (req, res) => {

   var account
   var tran
   var trans
   var user

   acconutModel.findById(
      req.params.id
   ).then((docs) => {
      account = docs
      console.log("account")
      console.log(account)
   }).then(() => {
      return infoModel.findById(
         res.locals.user.id
      )
   }).then((docs) => {
      user = docs
      console.log("user")
      console.log(user)
      if (user.balance - account.value < 0) {
         throw 'tài khoản không đủ'
      }
   }).then(() => {
      return transactionModel.insertMany({
         value: account.value,
         balance_before: user.balance,
         account: account._id,
         balance_after: user.balance - account.value,
         userId: user._id,
         stage: 1
      })
   }).then((docs) => {
      tran = docs
      console.log("tran:")
      console.log(tran)

   }).then(() => {
      return transactionModel.find({
         userId: res.locals.user._id
      })
   }).then((docs) => {
      trans = docs
      if (tran[0].balance_before !== trans[trans.length - 2].balance_after)
         throw "balance_before!=balance_after"
   }).then(() => {
      return acconutModel.findByIdAndUpdate(account._id, {
         stage: 1
      })

   }).then((docs) => {
      if (docs.stage === 1) {
         throw "acc không tồn tại"
      }
      console.log(docs)
   }).then(() => {
      return infoModel.findByIdAndUpdate(user._id, {
         balance: tran[0].balance_after
      })

   }).then((docs) => {
      console.log("da luu balance")
      console.log(docs)
      res.redirect('/')
   }).catch((err) => {
      console.log(err)
      if (tran) {
         transactionModel.findByIdAndRemove(tran[0]._id, (err, docs) => {
            console.log("loi luu da xoa")
            console.log(docs)
         })
      }
      res.render('shop/account/index', {
         id: req.params.id,
         err: err
      })
   })
}


function convertDateToUTC(date) {
   return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}