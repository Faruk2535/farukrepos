// function to target element

function getElement(element){
    return document.querySelector(Element);
}

/* for nav__button function */
const article = document.querySelectorAll('.nav__article>article')
let navBtn = document.querySelectorAll('.nav__button>button');
console.log(navBtn);

// nav button switch

for(let i=0; i< navBtn.length; i++){
    navBtn[i].addEventListener("click", () =>{
        navBtn.forEach((btn) => {
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        })
        navBtn[i].style.backgroundColor = 'var(--bg-color3)'

        article.forEach(btn =>{
            btn.classList.remove('active')
        })
        article[i].classList.add('active');
    })
}