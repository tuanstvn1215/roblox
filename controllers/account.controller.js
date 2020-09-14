const accountModel = require('../models/account.model')
//trả về toàn bộ account game
module.exports.Index = async (req, res) => {
   account = await accountModel.find({})
   res.send(account)
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