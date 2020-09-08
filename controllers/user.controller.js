const Infomodel = require('../models/info.model')
module.exports.getIndex = (req, res) => {
   console.log(res.locals.user)
   res.render('shop/user/index', {
      user: res.locals.user
   })
}
module.exports.postIndex = async (req, res) => {
   if (req.body.email) {
      console.log(
         res.locals.user.name
      )
      await Infomodel.findByIdAndUpdate(res.locals.user._id, {
         email: req.body.email
      }, {
         new: true
      })
   } else {
      await Infomodel.findByIdAndUpdate(res.locals.user._id, {
         fullname: req.body.fullname,
      }, {
         new: true
      })
   }

   res.redirect('/user')
}