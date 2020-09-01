var accounts = [{
      ten: "108",
      weapon: "taki",
      level: "1000",
      img: "1"
   },
   {
      ten: "102",
      weapon: "kosshi",
      level: "2000",
      img: "2"
   }, {
      ten: "108",
      weapon: "taki",
      level: "1000",
      img: "1"
   }, {
      ten: "102",
      weapon: "kosshi",
      level: "2000",
      img: "2"
   },
]
module.exports.getIndex = async (req, res) => {
   res.render('shop/index', {
      accounts: accounts
   })
}