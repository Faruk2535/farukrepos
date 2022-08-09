function getElement(element){
    return document.querySelector(element)
};

const date = new Date();

setInterval(setTime, 1000);

function setTime(){
    let date = new Date();

    getElement('.hours input').value = date.getHours();
    getElement('.minutes input').value = date.getMinutes();
    getElement('.seconds input').value = date.getSeconds();

}


let allInput = document.querySelectorAll('.time input')

allInput.forEach(input => {
    input.addEventListener('click', hello)
    
});
function hello(){
    alert('hi')
}







