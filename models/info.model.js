const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
	name: String,
	fullname: String,
	img: String,
	email: String,
	balance: Number,
})
const UserInfo = mongoose.model('Info', RobloxaccSchema, 'UserInfo')

module.exports = UserInfo
