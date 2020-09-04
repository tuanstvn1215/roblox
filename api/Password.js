const { model } = require('mongoose')

bcrypt = require('bcrypt')
var Password = ()=>{}
Password.encrypt = async (password) =>{
    var salt = await bcrypt.genSalt(10)
    var encryptPassword = await bcrypt.hash(password, salt)
    console.log(encryptPassword)
    return encryptPassword
}
Password.compare = async (password,encryptPassword)=>{ 
    console.log( bcrypt.compare(password, encryptPassword))
    return await bcrypt.compare(password, encryptPassword)
}
module.exports = Password