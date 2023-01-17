getElement = (element)=>{
    return document.querySelector(element);
}


const loginEmail = document.forms['login__form']['email'];
const loginPassword = document.forms['login__form']['password'];

// for switching tab and position
var desktopBtn = document.querySelectorAll('.right__container-child button');
var mobileBtn = document.querySelectorAll('.user__help h4 button');

// all clickable login and signup button both mobile and desktop
var allClickable = Array.prototype.concat.call(...desktopBtn , ...mobileBtn)



allClickable.forEach((btn) => {
    
    btn.addEventListener('click', ()=>{

        // move tab left and right with transition

        getElement('.right__container').classList.toggle('p-right')
        getElement('.left__container').classList.toggle('p-left')

        // switch login and signup tab
        let selectBtn = document.querySelectorAll('.right__container-child');
        let userForms = document.querySelectorAll('#user-form');
        for (let i = 0; i < selectBtn.length; i++) {

            selectBtn[i].classList.toggle('show')
            userForms[i].classList.toggle('show')
            
        }





    })
}); 

