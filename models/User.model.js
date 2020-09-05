const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: String,
   password: String,
})
const User = mongoose.model('User', RobloxaccSchema, 'User')

module.exports = User