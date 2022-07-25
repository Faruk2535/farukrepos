function getElement(target){
    return document.querySelector(target)
}

const expandBtn = getElement(".main3");
expandBtn.addEventListener("click", ()=>{
    getElement(".additional-bar").classList.toggle("show")
});


const allBtn = document.querySelectorAll("button");
const delBtn = getElement("button[name=b13]");
const submitBtn = getElement('button[name=b12]');




let answer1 = Number();
let answer2 = "";

for(let i=0; i< allBtn.length; i++){
    allBtn[i].addEventListener("click", ()=>{
        answer2 += allBtn[i].value;
        getElement("#calc").textContent = answer2;
        if(answer2.length > 1){
            delBtn.innerText = "↵";
        } else if (answer2.length === 1){
            delBtn.innerText = 'CLR'
        };
        // to reduce the fontsize and number increate for h4
        if(answer2.length >= 12){
            let newSize = 100 - (answer2.length*2 -10) + "%";
            getElement("#calc").style.fontSize = newSize;

        } else if (answer2.length < 12){
            let newSize = 100 + (answer2.length/2 +10) + "%";
            getElement("#calc").style.fontSize = newSize;
        }

        // to reduce the fontsize as number increases for h2 and otherwise
        if(getElement("#workings").innerHTML.length >= 8){
            let newSize = 100 - (getElement("#workings").innerHTML.length -10) + "%";
            getElement("#workings").style.fontSize = newSize;

        } else if (getElement("#workings").innerHTML.length < 8){
            let newSize = 100 + (getElement("#workings").innerHTML.length/2 +10) + "%";
            getElement("#workings").style.fontSize = newSize;
        }

    })
}

// click function for equals button
submitBtn.addEventListener('click', ()=>{

    if(answer2){
        // let answer1 = eval(answer2).toPrecision(13);
        // let answer1 = Number.isInteger(eval(answer2))? eval(answer2): eval(answer2).toPrecision(13);
        if(eval(answer2)){
            let answer1 = Number.isInteger(eval(answer2))? eval(answer2): eval(answer2).length > 15? eval(answer2).toPrecision(13): eval(answer2);

            getElement("#workings").innerText = answer1;
            answer2 = answer1;    
        } else{
            answer2 = 'Maths Error'
            // answer1 = Number()
            // getElement("#calc").textContent = answer1;
            getElement("#workings").innerText = answer2;
        }
    } else {
        answer2 += ""
    }

    // if(eval(answer2)){
    //     return answer1
    // } else {
    //     return answer2 = "maths error"
    // }

    // try {
    //     if(!eval(answer2)) throw "Maths Error"
        
    // } catch (err) {
    //     getElement("#workings").innerHTML = err
    // }

    //  finally{
    //     answer1 = Number()
    //     answer2 = "";
    //     getElement("#calc").textContent = answer2;
    //     getElement("#workings").innerText = answer1;
    // }
        
    // if(!eval(answer2)){
    //     answer2 = 'Maths Error'
    // }
});

// click function for backspace button


delBtn.addEventListener("click", ()=>{
    if(answer2.length > 1){
        answer2 = answer2.slice(0 , answer2.length -1)
        getElement("#calc").textContent = answer2;
        

    } else if (answer2.length <=1){
        answer1 = Number()
        answer2 = ""
        getElement("#calc").textContent = answer1;
        getElement("#workings").innerText = answer2;
    } 
    
})

