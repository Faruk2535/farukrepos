const getElement = (element)=>{
    return document.querySelector(element);
}

// list of btns
const allBox = document.querySelectorAll('.tic');
let playerVsBot, playerVsPlayer;

let  player1, player2;
let players = ["X", "O"];



let player1Score = 0;
let player2Score = 0;

// const allPossibleOutcome = {
//     poss1: [0,1,2],
//     poss2: [3,4,5],
//     poss3: [6,7,8],
//     poss4: [0,3,6],
//     poss5: [1,4,7],
//     poss6: [2,5,8],
//     poss7: [0,4,8],
//     poss8: [2,4,6]
// }
const allPossibleOutcome = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
// let playerVsBot = getElement("#oneplayer").checked;
// let playerVsPlayer = getElement("#twoplayer").checked;





console.log(allBox)

// introduction/start script
window.onload = function(){
    getElement('.intro').style.display  = 'flex';
}
const allNextBtn = document.querySelectorAll('.next__btn');
const allPrevBtn = document.querySelectorAll('.prev__btn');

for (let i = 0; i < allNextBtn.length; i++) {
    allNextBtn[i].addEventListener('click', ()=>{
        if(i === (allNextBtn.length -1)){
            getElement('.intro').style.display = 'none';
            getElement('.player1').innerHTML = player1 + ": " + player1Score;
            getElement('.player2').innerHTML = player2 + ": " + player2Score;

        } else{
            allNextBtn[i].parentElement.parentElement.style.display = 'none'
            allNextBtn[i + 1].parentElement.parentElement.style.display = 'flex';
        }
    });
}

for (let i = 0; i < allPrevBtn.length; i++) {
    allPrevBtn[i].addEventListener('click', ()=>{
        if(i === 0){
            allPrevBtn[i].parentElement.parentElement.style.display = 'none'
            getElement('.play').style.display = 'flex'
        }else{
        allPrevBtn[i].parentElement.parentElement.style.display = 'none'
        allPrevBtn[i - 1].parentElement.parentElement.style.display = 'flex';
        }
    });

    
}

const chkBox = document.querySelectorAll('.player__mode input[type=checkbox');
for (let i = 0; i < chkBox.length; i++) {
    chkBox[i].addEventListener('click', ()=>{
        chkBox.forEach(chk=>{
            chk.checked = false;
        })
        chkBox[i].checked = true;
    })
    
}

getElement('.player__next').addEventListener('click', ()=>{
    if(getElement("#oneplayer").checked){
        playerVsBot = true;
        playerVsPlayer = false;
        getElement('.name__two').style.display = 'none'
        getElement('.player2__name').innerHTML = "Computer";

    } else if(getElement("#twoplayer").checked){
        playerVsPlayer = true;
        playerVsBot = false;
        getElement('.name__two').style.display = 'flex'

    }

})

getElement('.btn__name').addEventListener('click', ()=>{
    player1 = getElement('#name1').value
    player2 = getElement('#name2').value
    if(getElement("#twoplayer").checked == true){
        getElement('.player1__name').innerHTML = player1;
        getElement('.player2__name').innerHTML = player2;
    }else{
        getElement('.player1__name').innerHTML = player1;
    }


})
getElement('.start__btn').addEventListener('click', ()=>{
  

})

// end of introduction/start script

// BOX INPUT SYTLING


for (let i = 0; i < allBox.length; i++) {

    allBox[i].addEventListener('click', function play(){
        if(playerVsBot === true){
            humanPlay(i);
            botPlay()
        }else if(playerVsPlayer == true){
            humanPlay(i, players)
        }
        allBox[i].removeEventListener('click', play);

    })

}




function humanPlay(i, players){

    if(players){
        allBox[i].innerHTML = players[0];
        players.push(players.shift());
    } else{
        allBox[i].innerHTML = "X";
    }

    if(allBox[i].innerHTML == "X"){
        allBox[i].style.color = 'red';
    }else{
        allBox[i].style.color = 'green'
    }

    gameRules(i)

}



async function botPlay(){
    setTimeout(function botPlays(){
        let allEmptyBox = [ ];
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].innerHTML ==""){
                allEmptyBox.push(allBox[i])
            }
        }
        // let botSelect = allEmptyBox[Math.round(Math.random() * allEmptyBox.length)];
        let botSelect = allEmptyBox[Math.ceil(Math.random() * allEmptyBox.length) ];
        botSelect.innerHTML = 'O';
        // botSelect.removeEventListener("click", play)
        // botSelect.style.cursor = 'not-allowed';
        gameRules(botSelect);
    }, 2000)

}

// GAME ALGORITHM

function gameRules(i, botSelect){
    for (let x = 0; x < allPossibleOutcome.length; x++) {
        
        if(allBox[allPossibleOutcome[x][0]].innerHTML == allBox[i].innerHTML && allBox[allPossibleOutcome[x][1]].innerHTML == allBox[i].innerHTML && allBox[allPossibleOutcome[x][2]].innerHTML == allBox[i].innerHTML ) {
            alert(allBox[i].innerHTML + ' WINS')
            console.log('hello')
            // alert(allBox[i].innerHTML || botSelect.innerHTML)

        }else if(allBox[allPossibleOutcome[x][0]].innerHTML == botSelect.innerHTML && allBox[allPossibleOutcome[x][1]].innerHTML == botSelect.innerHTML && allBox[allPossibleOutcome[x][2]].innerHTML == botSelect.innerHTML){
            alert('O WINS')
        }

        
    }


}



