function getElement(identity){
    let element =
    document.querySelector(identity)
    return element
}
function showdrop(){

}

getElement(".sidebar").addEventListener("click", ()=>{
    getElement(".dropdown").classList.toggle('showdrop')

})

//defining the buttons

const countBtn = getElement(".count");
const resetBtn = getElement(".reset");
const saveBtn = getElement(".save");
const date  = new Date();

let count = 0;
let highestScore = "";
let currentCount = getElement(".countNum")
let highestCount = getElement('.highest');
highestCount.textContent += highestScore;
highestCount.style.color = 'white';


countBtn.addEventListener("click", ()=> {
    count++
    currentCount.innerText = count;
    if(count == 10e5){
        return count = 0
    }
});

resetBtn.addEventListener("click", ()=> {
    count = 0
    currentCount.innerText = count;
});

saveBtn.addEventListener("click", ()=> {
    save();
    alert('saved successfully');
   
    if(count >= highestScore){
        highestScore = count;
        highestCount.textContent = highestScore
    };
    count = 0;
    currentCount.innerText = 0;
});

// reset highest Count

getElement(".rhcount").addEventListener("click", ()=>{
    highestScore = 0
    highestCount.textContent = 0;
})

function save(){
    let tabelRow = document.createElement('tr',)
    let tableCell1 = document.createElement('td')
    let tableCell2 = document.createElement('td')
    let datetime = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+ (date.getHours() -12)+':'+date.getMinutes()+':'+date.getSeconds();


    getElement(".record-table").appendChild(tabelRow);
    tabelRow.appendChild(tableCell1);
    tabelRow.appendChild(tableCell2);

    tableCell1.innerHTML = datetime;
    tableCell2.innerHTML = count;
}



