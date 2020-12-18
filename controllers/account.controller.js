const accountModel = require('../models/account.model')
const adminModel = require('../models/admin.model')
//trả về toàn bộ account game
module.exports.Index = async (req, res) => {
   const adminRole = await adminModel.find({
      userId: res.locals.user._id
   })
   var accounts = await accountModel.find({})

   if (adminRole[0]) {
      console.log(adminRole)
      res.render('shop/user/account', {
         accounts: accounts
      })
      return
   }
   console.log(res.locals.user._id)
   accounts = accounts.filter((value, index, arr) => {
      return value.userId == res.locals.user._id
   })
   res.render('shop/user/account', {
      accounts: accounts
   })
}
//xóa 1 account game
module.exports.Delete = async (req, res) => {
   accountModel.findByIdAndDelete(req.params.id)
   res.redirect('/admin')
}
//lưu 1 account game lên cơ sở dữ liệu
module.exports.Create = async (req, res) => {
   if (req.file) {
      req.body.img = req.file.path.split("\\").slice(1).join('/')
   }
   await accountModel.insertMany(req.body)
   res.redirect('/admin')
}