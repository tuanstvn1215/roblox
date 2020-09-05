const Password = require('../api/Password')
const modelUser = require('../models/User.model');

module.exports.getIndex = async (req, res) => {
   
   res.render('shop/login');
}

module.exports.postIndex = async(req, res) => {
   var userinput = req.body
   var user = await modelUser.find({name:userinput.name},(err)=>{
      if(err){
         console.log(err)
   }
   })
   userinput.password=await Password.encrypt(userinput.password)
   if(Password.compare(user.password,userinput.passwords))
      res.redirect('/')
   console.log(user)
   res.redirect('/login')
   
}

module.exports.getSignup = async (req, res) => {

}

module.exports.postSignup = async (req, res) => {
   try{
   
   var pass
   pass =await Password.encrypt(req.body.password)
   req.body.password=pass;
   modelUser.insertMany(req.body)
   console.log('Đăng kí thành công: ')
   console.log(req.body)
   }
   catch{
      console.log("Đăng kí thất bại")
   }
   res.redirect('/login')
}