const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
    name:String,
    img:String,
    email:String,
    balance:Number
})
const UserInfo = mongoose.model('UserInfo', RobloxaccSchema, 'UserInfo')

module.exports = UserInfo