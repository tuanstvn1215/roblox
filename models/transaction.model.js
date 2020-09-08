const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   Date: String,
   value: Number,
   balance_before: Number,
   balance_afler: Number,
   userId: String
})
const Trasaction = mongoose.model('Trasaction', RobloxaccSchema, 'Trasaction')

module.exports = Trasaction