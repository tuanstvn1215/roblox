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

var login_name =document.getElementById('login_name')
var login_pass =document.getElementById('login_pass')
var signup_name =document.getElementById('signup_name')
var signup_pass =document.getElementById('login_tk')
var signup_rppass =document.getElementById('login_rppass')
var login_btn = document.getElementById('login_btn')
login_btn.disabled=true;
login_name.addEventListener('keyup',()=>{
    checkBlanklogin();
})
login_pass.addEventListener('keyup',()=>{
    checkBlanklogin();
})
var checkBlanklogin = ()=>{
    login_btn.disabled=true;
    err=0;
    if(!login_name.value){
        document.getElementById('login_namev').style.display='block'
        err++
    }else{
        document.getElementById('login_namev').style.display='none'
    }
    
    if(!login_pass.value)
    {
        document.getElementById('login_passv').style.display='block'
    }else{
        document.getElementById('login_passv').style.display='none'
    }
    if(err){
        login_btn.disabled=true;
        login_btn.style.backgroundColor='rgb(91, 95, 90)'
        login_btn.removeEventListener('mouseenter')
    }else{     
        login_btn.disabled=false;
        login_btn.style.backgroundColor='rgb(0, 87, 52)'
        login_btn.addEventListener('mouseenter',()=>{
            login_btn.style.backgroundColor='rgb(11, 92, 0)'
        })
        login_btn.addEventListener('mouseleave',()=>{
            login_btn.style.backgroundColor='rgb(0, 87, 52)'
        })
    }
        
        
}
