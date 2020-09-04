const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: String,
   password: String,
   balance:String,
   img: String,

})
const User = mongoose.model('User', RobloxaccSchema, 'User')

module.exports = User