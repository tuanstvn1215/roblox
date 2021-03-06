const mongoose = require('../db')

const Schema = new mongoose.Schema({
   Date: {
      type: Date,
      default: Date.now
   },
   value: {
      type: Number,
      required: true
   },
   balance_before: {
      type: Number,
      required: true
   },
   balance_after: {
      type: Number,
      required: true
   },
   account: {
      type: String,
      required: true
   },
   userId: {
      type: String,
      required: true
   },
   stage: {
      type: Number,
      required: true
   }
})
var date = () => {
   date = new Date.now()
   date = date.getTime() + 25200000
   date2 = new Date(date)
   return date2
}
const Trasaction = mongoose.model('Transaction', Schema, 'Transaction')

module.exports = Trasaction