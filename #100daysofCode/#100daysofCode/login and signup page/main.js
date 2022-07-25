getElement = (element)=>{
    return document.querySelector(element);
}

const loginEmail = document.forms['login__form']['email'];
const loginPassword = document.forms['login__form']['password'];






getElement('.right__container button').addEventListener('click', ()=>{
    getElement('.right__container').classList.toggle("slide__left");
    getElement('.left__container').classList.toggle("slide__right");

    if(getElement(".right__container button").innerHTML === "Login"){
        getElement(".right__container h2").innerHTML = 'New User?';
        getElement(".right__container button").innerHTML = 'SignUp';
        getElement(".signup__container").style.display = 'none';
        getElement(".login__container").style.display = 'block';
    } else{
        getElement(".right__container h2").innerHTML = 'Already a User?';
        getElement(".right__container button").innerHTML = 'Login';
        getElement(".login__container").style.display = 'none';
        getElement(".signup__container").style.display = 'block';



    }
})

/*for media queries below 580px login and signup button*/

getElement(".login__container .user__help h4 button").addEventListener('click', ()=>{
    getElement('.signup__container').style.display = 'block'
    getElement('.login__container').style.display = 'none'
})
getElement(".signup__container .user__help h4 button").addEventListener('click', ()=>{
    getElement('.signup__container').style.display = 'none'
    getElement('.login__container').style.display = 'block'
})
/* end of media queries below 580px login and signup button*/



/*login form validation*/

function validateLogin(){

    if(loginEmail.value === 'farukonibudo@gmail.com' && loginPassword.value === '123456'){
        getElement('#login__error').innerHTML = 'Succes';
        getElement('#login__error').style.backgroundColor = 'green'
        return true
    } else{
        try {
            // if(loginEmail !== 'farukonibudo@gmail.com' && loginPassword !== '123456') throw 'invalid Email and Password'
            if(loginEmail.value == '' && loginPassword.value == '') throw 'invalid email and password'
            if(loginEmail.value == '') throw 'Invalid Email Address';
            if(loginPassword.value == '') throw 'Invalid Password';
            if(loginEmail.value !== 'farukonibudo@gmail.com') throw 'Email not correct';
            if(loginPassword.value !== '123456') throw 'password not correct';
            
        } catch (error) {
            getElement('#login__error').innerHTML = error;
        }
        return false
    }





}




/* end of login form validation*/


/* SIGNUP  form validation*/

function validateSignup(){

    var firstName = document.forms['signup__form']['fname'].value;
    var lastName = document.forms['signup__form']['lname'].value;
    var email = document.forms['signup__form']['email'].value;
    var password1 = document.forms['signup__form']['password'][0].value;
    var password2 = document.forms['signup__form']['password'][1].value;

    if(firstName && lastName && email && password1 && password2 && password1==password2){
        alert('hello')
            return true
    } else{
        try {
            if(firstName = '') throw 'invalid First Name';
            if(lastName = '') throw 'invalid Last Name';
            if(email = '') throw 'invalid Email Address';
            if(password1 = '') throw 'invalid Password';
            if(password2 = '') throw 'invalid Password';
            if(password1 !== password2) throw 'Password Mismatched';
            
        } catch (error) {
            getElement('#signup__error').innerHTML = error;
            
        }
        return false

    }


}


/* end of SIGNUP form validation*/


