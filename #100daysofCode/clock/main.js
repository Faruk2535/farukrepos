function getElement(element){
    return document.querySelector(element)
};

const date = new Date();
const list = document.querySelectorAll('.time');
// let currentValue = new Array();


setInterval(setTime, 1000);

function setTime(){
    let date = new Date();

    getElement('.hours .number').innerHTML = date.getHours();
    getElement('.minutes .number').innerHTML = date.getMinutes();
    getElement('.seconds .number').innerHTML = date.getSeconds();

    
}

const observer = new MutationObserver(mutations=>{
    const addedTextArray = []
    const removedTextArray = []
    for (let j = 0; j < mutations.length; j++) {
        addedTextArray.push(mutations[j].addedNodes[0].nodeValue)
        removedTextArray.push(mutations[j].removedNodes[0].nodeValue)
    }

    for (let i = 0; i < mutations.length; i++) {
        if(addedTextArray[i] !== removedTextArray[i]){
            // list[i].classList.contains(`time${i}`) && list[i].classList.remove(`time${i}`)
            list[i].classList.toggle(`time${i}`)
        }
        //     setTimeout(() => {
        //         list[i].classList.remove(`time${i}`)
                
        //     }, 1000); 
        // }
        
    }

    console.log(addedTextArray)
    console.log(removedTextArray)

})


    
observer.observe(list[0], {
    childList: true,
    subtree: true,
    characterData: true
})
observer.observe(list[1], {
    childList: true,
    subtree: true,
    characterData: true
})
observer.observe(list[2], {
    childList: true,
    subtree: true,
    characterData: true
})
