var wrap_header_item = document.getElementsByClassName('wrap-header-item')
var wrap_login = document.getElementById('wrap-login')
var wrap_signup = document.getElementById('wrap-signup')
wrap_header_item[0].addEventListener('click', () => {
    wrap_login.style.display = 'block'
    wrap_signup.style.display = 'none'
    wrap_header_item[0].style.borderBottom = 'none'
    wrap_header_item[1].style.borderBottom = '1px solid gainsboro'
})
wrap_header_item[1].addEventListener('click', () => {
    wrap_login.style.display = 'none'
    wrap_signup.style.display = 'block'
    wrap_header_item[0].style.borderBottom = '1px solid gainsboro'
    wrap_header_item[1].style.borderBottom = 'none'
})

var login_name = document.getElementById('login_name')
var login_pass = document.getElementById('login_pass')
var signup_name = document.getElementById('signup_name')
var signup_pass = document.getElementById('signup_pass')
var signup_rppass = document.getElementById('signup_rppass')
var login_btn = document.getElementById('login_btn')
var signup_btn = document.getElementById('signup_btn')
login_btn.disabled = true;
signup_btn.disabled = true;
login_name.addEventListener('keyup', () => {
    checkBlanklogin();
})
login_pass.addEventListener('keyup', () => {
    checkBlanklogin();
})
signup_name.addEventListener('keyup', () => {
    checkBlankSignup();
})
signup_pass.addEventListener('keyup', () => {
    checkBlankSignup();
})
signup_rppass.addEventListener('keyup', () => {
    checkBlankSignup();
})
var checkBlanklogin = () => {
    err = 0;
    if (!login_name.value) {
        document.getElementById('login_namev').style.display = 'block'
        err++
    } else {
        document.getElementById('login_namev').style.display = 'none'
    }

    if (!login_pass.value) {
        err++
        document.getElementById('login_passv').style.display = 'block'
    } else {
        document.getElementById('login_passv').style.display = 'none'
    }
    if (!err) {
        login_btn.disabled = false;

        login_btn.style.backgroundColor = 'rgb(0, 87, 52)'
        login_btn.addEventListener('mouseenter', () => {
            login_btn.style.backgroundColor = 'rgb(11, 92, 0)'
            login_btn.style.cursor = "pointer"
        })
        login_btn.addEventListener('mouseleave', () => {
            login_btn.style.backgroundColor = 'rgb(0, 87, 52)'
        })

    } else {
        login_btn.style.cursor = "default"
        login_btn.disabled = true;
        login_btn.style.backgroundColor = 'rgb(91, 95, 90)'
        login_btn.removeEventListener('mouseenter', () => {})
    }


}
var checkBlankSignup = () => {
    err = 0;
    if (!signup_name.value) {
        document.getElementById('signup_namev').style.display = 'block'
        err++
    } else {
        document.getElementById('signup_namev').style.display = 'none'
    }

    if (!signup_pass.value) {
        err++
        document.getElementById('signup_passv').style.display = 'block'
    } else {
        document.getElementById('signup_passv').style.display = 'none'
    }

    if (signup_rppass.value != signup_pass.value) {
        err++
        document.getElementById('signup_rppassv').style.display = 'block'
    } else {
        document.getElementById('signup_rppassv').style.display = 'none'
    }

    if (!err) {
        signup_btn.disabled = false;
        signup_btn.style.backgroundColor = 'rgb(0, 87, 52)'
        signup_btn.addEventListener('mouseenter', () => {
            signup_btn.style.backgroundColor = 'rgb(11, 92, 0)'
            signup_btn.style.cursor = "pointer"
        })
        signup_btn.addEventListener('mouseleave', () => {
            signup_btn.style.backgroundColor = 'rgb(0, 87, 52)'
        })

    } else {
        signup_btn.disabled = true;
        signup_btn.style.backgroundColor = 'rgb(91, 95, 90)'
        signup_btn.removeEventListener('mouseenter', () => {})
        signup_btn.style.cursor = "default"
    }


}