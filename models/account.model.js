const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: String,
   game: String,
   password: String,
   level: String,
   img: String,
   weapon: String,
   value: Number

})
const account = mongoose.model('account', RobloxaccSchema, 'account')

module.exports = account