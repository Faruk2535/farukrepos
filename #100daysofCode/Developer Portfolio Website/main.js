const hambugger = document.querySelector('.nav__md-screen');

hambugger.addEventListener('click', ()=>{
    document.querySelector('.dropdown__content').classList.toggle('show__content');
})