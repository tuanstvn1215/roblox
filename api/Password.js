const bcrypt = require('bcrypt')
var Password = {
    encrypt: async (password) => {
        var salt = await bcrypt.genSalt(10)
        var encryptPassword = await bcrypt.hash(password, salt)
        console.log(encryptPassword)
        return encryptPassword
    },
    compare: async (password, encryptPassword) => {
        return await bcrypt.compare(password, encryptPassword)
    }
}
module.exports = Password