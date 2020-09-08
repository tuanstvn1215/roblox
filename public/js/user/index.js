var btnCancle = document.getElementById('btn-cancle')
var btnFullname = document.getElementById('btn-fullname')
var btnEmail = document.getElementById('btn-email')
btnCancle.addEventListener('click', (e) => {
   document.getElementById('inputs').style.display = 'none'
   document.getElementById('infos').style.display = 'flex'
})
btnEmail.addEventListener('click', (e) => {
   document.getElementById('infos').style.display = 'none'
   document.getElementById('inputs').style.display = 'flex'
   document.getElementById('input-email').display = 'block'
   document.getElementById('input-email').disabled = false
   document.getElementById('input-fullname').disabled = true
})
btnFullname.addEventListener('click', (e) => {
   document.getElementById('infos').style.display = 'none'
   document.getElementById('inputs').style.display = 'flex'
   document.getElementById('input-fullname').display = 'block'
   document.getElementById('input-fullname').disabled = false
   document.getElementById('input-email').disabled = true
})