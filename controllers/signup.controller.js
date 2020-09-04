Password = require('../api/Password')

module.exports.getIndex = async (req, res) => {
   var test =  await Password.encrypt("hello")
   var asd = await Password.compare("hello",test)
   
   console.log(asd)
}