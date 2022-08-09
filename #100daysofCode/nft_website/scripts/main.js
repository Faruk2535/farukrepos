const barsHambugger = getElement('.uil-bars')
const navHambugger = getElement('.sm__screen-dropdown')
const toggleBtn = getElement(".theme__inner");
const allDropDown = document.querySelectorAll('.dropdown');




function getElement(element){
    return document.querySelector(element)
}
//Add background nav-header only when windows scroll
window.addEventListener('scroll', ()=>{
        if (window.scrollY > 0) {
            getElement('header').classList.add('banner-bg-color')
            getElement('.nav__container ul li:last-child').classList.add('li-style')
        }else{
            getElement('header').classList.remove('banner-bg-color')
            getElement('.nav__container ul li:last-child').classList.remove('li-style')
        }
})

// TOGGLE THEME ON AND OFF

getElement(".theme__outter").addEventListener('click', ()=>{
    toggleBtn.classList.toggle("theme__toggle");
})


// ALL DROPDOWN TOGGLE MENU



for (let i = 0; i < allDropDown.length; i++) {
    allDropDown[i].addEventListener('click', ()=>{
        let contentElem = allDropDown[i].getElementsByClassName('dropdown__content');
        contentElem[0].classList.toggle('show__dropdown')

    });
}

//HAMBUGGER LEFT ASIDE TOGGLE
barsHambugger.addEventListener('click', ()=>{
    barsHambugger.classList.toggle('uil-times')
    getElement('.left__aside').classList.toggle('show__dropdown')
})

// navHambugger.addEventListener('click', ()=>{
//     console.log('hello')
//     navHambugger.classList.toggle('uil-times')
//     getElement('.nav__content').classList.toggle('show__dropdown')
// })


