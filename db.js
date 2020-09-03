const mongoose = require('mongoose')
const url =
   'mongodb+srv://tuanstvn1214:tuanstvn1214@cluster0.4hiz7.gcp.mongodb.net/roblox?retryWrites=true&w=majority'
mongoose.connect(
   url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   },
   (err) => {
      if (err) {
         console.log(`không thể kết nối Mongodb, lỗi:${err}`)
      } else {
         console.log('kết nối Mongodb thành công')
      }
   }
)
module.exports = mongoose