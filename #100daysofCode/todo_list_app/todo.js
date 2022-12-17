function getElement(element){
    return document.querySelector(element);
}
var artch1, artch2, artch2a, artch2bs;
let listInput = getElement("input[name=list]");
let addBtn = getElement(".addbtn");

function savelist(){

    if(listInput.value == ""){
        listInput.style.border = "2px solid red";
    } else {
        listInput.style.border = "none";



        // create article body
        let article = document.createElement('article');
        article.setAttribute('id', 'body')
    
        // create and append child to article
        artch1 = document.createElement("div");
        artch1.classList.add("todo__name");
        artch1.innerText = listInput.value;
    
        // create article child 2
        artch2 = document.createElement("div")
        artch2.classList.add("todo__btn");
    
        artch2a = document.createElement("a");
        artch2a.innerHTML = 'Edit';
        artch2a.classList.add('edit', 'btn');
        artch2a.setAttribute('onclick', 'editlist(event)');
    
        artch2b = document.createElement("a");
        artch2b.innerHTML = 'Delete'
        artch2b.classList.add('delete', 'btn')
        artch2b.setAttribute('onclick', 'deletelist(event)');

    
        artch2.append(artch2a, artch2b)
    
        // append all child to parent element
    
        article.append(artch1, artch2)
    
        getElement(".todo__output").appendChild(article)
    
        listInput.value = ""

    }

}
addBtn.addEventListener('click', savelist)



function editlist(event){
    let parent = event.target.parentElement.parentElement;
    let text = parent.querySelector('.todo__name').innerHTML;

    listInput.value = text;
    listInput.style.border = "4px dotted green";
    // delete upon edit
    parent.remove()

}
function deletelist(event){
    parent = event.target.parentElement.parentElement
    let text = 'proceed?'
    if(confirm(text)
    ){
        parent.remove()
    }
}


