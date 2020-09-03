const AccSam = require("../models/accsam.model")

module.exports.getaccsam = async (req, res) => {
   var Sams = await AccSam.find((err) => {
      if (err) {
         console.log(err)
      } else {}
   })
   // var acc = await fs.readFileSync('New.json', {
   //    encoding: 'utf8'
   // })
   // acc = JSON.parse(acc)
   // for (ac of acc) {
   //    AccSam.insertMany({
   //       name: ac
   //    }, (err) => {
   //       if (err) {
   //          console.log(err)
   //       } else {
   //          console.log('thêm thành viên thành công' + ac)
   //       }
   //    })
   // }
   var page = req.query.page || 0
   var Samspages = phantrang(Sams, 13)

   res.render('admin/accsam', {
      currentPage: parseInt(page),
      Sams: Samspages[page],
      pages: Samspages.length,
   })
}
module.exports.getIndex = (req, res) => {

}
module.exports.postIndex = (req, res) => {

}
module.exports.postaccsam = async (req, res) => {

}
module.exports.getDelete = async (req, res) => {
   console.log(req.params.id)
   res.render('delete', {
      id: req.params.id,
   })
}

module.exports.postDelete = async (req, res) => {
   await AccSam.findByIdAndDelete(req.params.id, (err, resq) => {
      if (err) {
         console.log(err)
      } else {
         console.log(resq)
      }
   })
   res.redirect('/')
}

var phantrang = (item, perpage) => {
   var temp = item
   var i = 0
   var tempitem = []
   while (i < temp.length / perpage) {
      tempitem[i] = temp.slice(i * perpage, i * perpage + perpage)
      i = i + 1
   }
   return tempitem
}