const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: String,
   password: String,
   level: String,
   img: String,
   weapon: String,
})
const AccGhoul = mongoose.model('AccGhoul', RobloxaccSchema, 'AccGhoul')

module.exports = AccGhoul