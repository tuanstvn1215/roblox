const modelAccGhoul = require("../models/account.model")

var accounts = [{
      name: "108",
      weapon: "taki",
      level: "1000",
      img: "1"
   },
   {
      name: "102",
      weapon: "kosshi",
      level: "2000",
      img: "2"
   }, {
      name: "108",
      weapon: "taki",
      level: "1000",
      img: "1"
   }, {
      name: "102",
      weapon: "kosshi",
      level: "2000",
      img: "2"
   },
]

module.exports.getIndex = async (req, res) => {
   accounts = await modelAccGhoul.find({}, err => {
      if (err) {
         console.log(err)
      }
   })
   res.render('shop/index', {
      accounts: accounts
   })
}