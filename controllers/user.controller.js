module.exports.getIndex = (req, res) => {
   console.log(res.locals.user)
   res.render('shop/user/index', {
      user: res.locals.user
   })
}
module.exports.getPost = (req, res) => {

}