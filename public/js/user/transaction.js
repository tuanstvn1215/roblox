dates = document.getElementsByClassName("date")
for (date of dates) {
   date2 = new Date(date.innerText)
   date.innerText = date2.toLocaleString('en-GB')
}
// toLocaleString('en-GB')
// date = new Date()
// date = date.getTime() + 25200000
// date2 = new Date(date)
// console.log(date2)