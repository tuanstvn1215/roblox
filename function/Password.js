const bcrypt = require('bcrypt')
var Password = {
    encrypt: async (password) => {
        var salt = await bcrypt.genSalt(10)
        var encryptPassword = await bcrypt.hash(password, salt)
        return encryptPassword
    },
    compare: (password, encryptPassword) => {
        var flag = bcrypt.compareSync(password, encryptPassword)
        return flag
    }
}
module.exports = Password