const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const circle = document.querySelectorAll('.circle')
const line = document.querySelectorAll('.progressline')

let circleprogress = 0;

let active = 0;

next.addEventListener('click', function progressnxt(){
    active++
    // circle[active].style.backgroundColor = '06c406';
    circle[active].classList.add('active');
    document.querySelector('.progressline').style.width = active * (25) + '%';


});
prev.addEventListener('click', function progressprv(){
    active--;
    circle[active + 1].classList.remove('active')
    document.querySelector('.progressline').style.width = (active - 1) * 25 + '%';

});



