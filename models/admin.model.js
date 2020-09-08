const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   userId: String,
})
const Admin = mongoose.model('Admin', RobloxaccSchema, 'Admin')

module.exports = Admin