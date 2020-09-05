const Password = require('../api/Password')
const modelUser = require('../models/User.model');
const infoModel = require('../models/info.model')
module.exports.getIndex = async (req, res) => {
   res.render('shop/login');
}

module.exports.postIndex = async (req, res) => {
   var user = await modelUser.findOne({ name: req.body.name }, (err) => {
      if (err) {
         console.log(err)
      }
   })
   if (!user) {
      res.render('shop/login', {
         errs: ['Tài khoản không tồn tại']
      })
   }
   if (!(await Password.compare(req.body.password, user.password))) {
      res.render('shop/login', {
         errs: ['Sai mật khẩu'],
      })
   } else {
      res.cookie('_id', user._id,{
         signed : true,
         expires: new Date(Date.now() + 3600000)
         
      })
      res.redirect('/')
   }

}


module.exports.getSignup = async (req, res) => {

}

module.exports.postSignup = async (req, res) => {
   try {

      var pass
      pass = await Password.encrypt(req.body.password)
      req.body.password = pass;

      modelUser.insertMany(req.body,(err,user)=>{
         infoModel.insertMany(
            {
            _id:user._id,
            balance:0,
            },(err,docs)=>{
               console.log(docs)
            }
         )
      }) 

      console.log('Đăng kí thành công: ')
      console.log(req.body)
   }
   catch{
      console.log("Đăng kí thất bại")
   }
   res.redirect('/login')
}
