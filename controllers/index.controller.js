const modelAccGhoul = require("../models/account.model")

module.exports.getIndex = async (req, res) => {

   accounts = await modelAccGhoul.find({}, err => {
      if (err) {
         console.log(err)
      }
   })
   res.render('shop/index', {
      accounts: accounts,
      user: res.locals.user
   })
}