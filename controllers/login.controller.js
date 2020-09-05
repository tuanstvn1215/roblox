var asd = {
   name: "sefsef",
   password: 'asd'
}
module.exports.getIndex = async (req, res) => {
   res.render('shop/login', );
}

module.exports.postIndex = (req, res) => {
   console.log(req.body)
}

module.exports.getSignup = async (req, res) => {

}

module.exports.postSignup = async (req, res) => {
   console.log(req.body)
}