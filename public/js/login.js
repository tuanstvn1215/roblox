var wrap_header_item = document.getElementsByClassName('wrap-header-item')
var wrap_login= document.getElementById('wrap-login')
var wrap_signup= document.getElementById('wrap-signup')
wrap_header_item[0].addEventListener('click',()=>{
    wrap_login.style.display='block'
    wrap_signup.style.display='none'
    wrap_header_item[0].style.borderBottom='none'
    wrap_header_item[1].style.borderBottom='1px solid gainsboro'
})
wrap_header_item[1].addEventListener('click',()=>{
    wrap_login.style.display='none'
    wrap_signup.style.display='block'
    wrap_header_item[0].style.borderBottom='1px solid gainsboro'
    wrap_header_item[1].style.borderBottom='none'
    })

