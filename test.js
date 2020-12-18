let hientai
let tet = new Date("2021-02-12T17:00:00.000Z")
let date
let ngay

setInterval(() => {
   hientai = new Date()
   date = tet - hientai
   ngay = new Date(date)
   console.log(+ngay.getMonth() + " : " + ngay.getDay() + " : " + ngay.getHours() + " : " + ngay.getMinutes() + " : " + parseInt(ngay.getSeconds()))
   date -= 1000;
}, 1000)