const mongoose = require('../db')
const RobloxaccSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   game: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   level: {
      type: Number,
      required: true
   },
   img: {
      type: String,
      default: new String("/img/acc/1.jpg")
   },
   weapon: {
      type: String
   },
   value: {
      type: Number,
      required: true
   },
   stage: {
      type: Number,
      default: 0
   }

})
const account = mongoose.model('account', RobloxaccSchema, 'account')

module.exports = account