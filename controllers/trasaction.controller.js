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
   res.render('shop/account/index', {
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
         Date: new Date(),
         value: account.value,
         balance_before: user.balance,
         balance_after: user.balance - account.value,
         userId: user._id,
         stage: 0
      })
   }).then((docs) => {
      tran = docs
      console.log("tran")
      console.log(tran)

   }).then(() => {
      return transactionModel.find({
         userId: res.locals.user._id
      })
   }).then((docs) => {
      trans = docs
      console.log("trans")
      console.log(trans)
   }).then(() => {
      {
         if (trans.length <= 1) {
            console.log("if 1")
            infoModel.findByIdAndUpdate(user._id, {
                  balance: trans[trans.length - 1].balance_after
               }, (err, docs) => {
                  console.log("da luu")
                  console.log(docs)
               }

            )
            console.log("da luu")
         } else {
            console.log(trans[trans.length - 1])
            console.log(trans[trans.length - 2])
            if (trans[trans.length - 1].balance_before === trans[trans.length - 2].balance_after) {
               console.log("if 2")
               infoModel.findByIdAndUpdate(user._id, {
                  balance: trans[trans.length - 1].balance_after
               }, (err, docs) => {
                  console.log("da luu")
                  console.log(docs)
               })
            } else {
               console.log("if 3")
               transactionModel.findByIdAndRemove(trans[trans.length - 1]._id, (err, docs) => {
                  console.log("loi luu da xoa")
                  console.log(docs)
               })
            }
         }
      }
   }).catch((err) => {
      console.log(err)
   })

   res.redirect('/')
}


function convertDateToUTC(date) {
   return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}