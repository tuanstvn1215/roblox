var phantrang = (item, perpage) => {
   var temp = item
   var i = 0
   var tempitem = []
   var l = temp.length
   while (i < l / perpage) {
      tempitem[i] = temp.slice(i * perpage, i * perpage + perpage)
      i = i + 1
   }
   return tempitem
}
module.exports = phantrang