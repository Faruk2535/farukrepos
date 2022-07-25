function getElement(identity){
    return document.querySelector(identity);
}
// deffining 

let list = getElement(".tbody__data");
let price   = getElement("input[name=price]");
let itemName   = getElement("input[name=item]");
let unit   = getElement("input[name=unit]");

// submit button function

getElement(".submit__btn").addEventListener('click', ()=>{
    if(price.value && unit.value && itemName.value){
        createtable();
        displayMessage()
        deleteValue()
        getElement("#table-head__data").style.visibility = 'visible';

    }  else{
        displayMessage2()
    }


});


function createtable(){

    let tableRow = document.createElement('tr');
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");

    getElement(".tbody__data").appendChild(tableRow);
    tableRow.append(tableData1, tableData2, tableData3, tableData4)

    tableData1.innerHTML = 1;
    tableData2.innerHTML = itemName.value;
    tableData3.innerHTML = price.value;
    tableData4.innerHTML = unit.value;
}
function deleteValue(){
    price.value = "";
    unit.value = "";
    itemName.value = "";
}

function displayMessage(){
    getElement(".message").innerHTML = "one item added";
    getElement(".message").style.backgroundColor = "rgba(0, 128, 0, 0.4)"

    setTimeout(() => {
        getElement(".message").innerHTML = "";
        getElement(".message").style.backgroundColor =  'transparent';
    }, 2000);
}

function displayMessage2(){
    getElement(".message").innerHTML = "Invalid Input";
    getElement(".message").style.backgroundColor = "rgba(255, 0, 0, 0.4)"

    setTimeout(() => {
        getElement(".message").innerHTML = "";
        getElement(".message").style.backgroundColor =  'transparent';
    }, 2000);


}

// clear Input

getElement(".clear-input__btn").addEventListener('click', ()=>{
    if(price.value || unit.value || itemName.value){
        price.value = '';
        unit.value = '';
        itemName.value = '';
        list.innerHTML = "";
        getElement("#table-head__data").style.visibility = 'hidden';
        clearMessage()
    } else {
        list.innerHTML = "";
        getElement("#table-head__data").style.visibility = 'hidden';

    }

});

function clearMessage(){
    getElement(".message").innerHTML = "All inputs cleared";
    getElement(".message").style.backgroundColor = "rgba(255, 0, 0, 0.4)"

    setTimeout(() => {
        getElement(".message").innerHTML = "";
        getElement(".message").style.backgroundColor =  '';
    }, 2000);

}

//end of clear input

let listAfter = getElement("");

listAfter.addEventListener("click", ()=>{
    alert('hello')
})

