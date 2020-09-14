const mongoose = require('../db')
const gameSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   }
})
const game = mongoose.model('Game', gameSchema, 'Game')
module.exports = game