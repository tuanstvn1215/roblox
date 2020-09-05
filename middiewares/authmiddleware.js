const Infomodel = require('../models/User.model');
module.exports.auth = async (req, res, next) => {
    if (!req.signedCookies._id) {
        if (req.path === '/login' || req.path === '/login/signup') {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        if (req.path === '/login') {
            res.redirect('/')
        }
        next()
    }
    var user = await Infomodel.findById(req.signedCookies._id)
    
    res.locals.user = user

}