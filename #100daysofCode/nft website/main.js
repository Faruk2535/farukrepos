function getElement(element){
    return document.querySelector(element)
}
//Add background nav-header only when windows scroll
window.addEventListener('scroll', ()=>{
        // getElement('header').classList.toggle('banner-bg-color', window.scrollY>0)
        if (window.scrollY > 0) {
            getElement('header').classList.add('banner-bg-color')
            getElement('.nav__container ul li:last-child').classList.add('li-style')
        }else{
            getElement('header').classList.remove('banner-bg-color')
            getElement('.nav__container ul li:last-child').classList.remove('li-style')
        }
})