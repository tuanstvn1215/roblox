const Infomodel = require('../models/User.model');
module.exports.auth = async (req, res, next) => {
    if (!req.signedCookies._id) {
        if (req.path === '/login' || req.path === '/login/signup' || req.path === '/') {
            next()
            return
        } else {
            res.redirect('/login')
            return
        }
    } else {
        if (req.path === '/login' || req.path === '/login/signup') {
            res.redirect('/')
            return
        }

    }
    var user
    user = await Infomodel.findById(req.signedCookies._id)
    res.locals.user = user
    next()

}