const infoModel = require('../models/info.model')
const transactionModel = require('../models/transaction.model')
const acconutModel = require('../models/account.model')

module.exports.getIndex = (req, res) => {
   res.render('/acconut/index')
}
module.exports.postCreate = async (req, res) => {
   var balance
   var value
   try {
      var balance = res.locals.user.balance
      var acconut = await acconutModel.findById(req.params.id)
      console.log(acconut)
      balance = balance - acconut.value
      if (balance < 0) {
         throw "tài khoản không đủ"
      }
      await transactionModel.insertMany({
         Date: new Date(),
         value: value,
         balance_before: res.locals.user.balance,
         balance_afler: balance,
         userId: res.locals.user._id
      })
      await infoModel.findByIdAndUpdate(res.locals.user.id, {
         balance: balance
      })
   } catch (err) {
      console.log(err)
   }
}