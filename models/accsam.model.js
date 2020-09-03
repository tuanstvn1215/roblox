const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: String,
})
const AccSam = mongoose.model('AccSam', RobloxaccSchema, 'robloxAccSam')

module.exports = AccSam