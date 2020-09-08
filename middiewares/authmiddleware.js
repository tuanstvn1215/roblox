const Adminmodel = require('../models/admin.model')
const Infomodel = require('../models/info.model')
const Usermodel = require('../models/User.model')

module.exports.auth = async (req, res, next) => {
    if (!req.signedCookies._id) {
        if (req.path === '/login' || req.path === '/login/signup' || req.path === '/') {
            next()
            return
        } else {
            res.redirect('/login')
            return
        }
    }
    try {
        user = await Infomodel.findById(req.signedCookies._id)
        if (!user) {
            await Usermodel.findByIdAndDelete(req.signedCookies._id)
            res.clearCookie("_id")
            res.redirect('/login')
            return
        }

    } catch {
        console.log('auth: lỗi lấy dữ liệu');
    }
    if (req.path === '/login' || req.path === '/login/signup') {
        res.redirect('/')
        return
    }
    var user
    console.log(user)
    res.locals.user = user
    next()
}

module.exports.adminrole = async (req, res, next) => {
    const admin = await Adminmodel.findOne({
        userId: res.locals.user._id
    })
    if (admin) {
        next()
        return
    }
    res.send('Forbiden')
}