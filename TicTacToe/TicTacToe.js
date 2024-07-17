const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".boxes");
const resetBtn = document.querySelector("#reset");
const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let playerTurn = true;
let winner ;
let msgContainer;

resetBtn.addEventListener("click",reset);

boxes.forEach(box => {
    box.addEventListener("click",() => {    
        if(playerTurn===true){
            box.innerText="X";
            box.style.backgroundColor="green";
            playerTurn=false;
        }
        else {
            box.style.backgroundColor="red";
            box.innerText="O";
            playerTurn=true;
        }
        box.disabled = true;
        checkWinner();
    })    
});

function reset(){
    playerTurn=true;
    
    boxes.forEach(box => {
        box.disabled= false;
        box.innerText='';
        box.style.backgroundColor="yellow";
    })
};


function checkWinner(){
    for (const pattern of patterns) {
        
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1!==''&& val2!=='' && val3 !== ""){
            if(val1 === val2 && val2 === val3) 
                showWinner();
            else continue;   
        }
        else continue;
        }
        
};
    
function showWinner(){
    if(playerTurn) 
        winner = "O";
    else 
        winner = "X";
    
    boxes.forEach(box => {
        box.disabled= true;
        if(box.innerText===""){
        }
    })
    
    resetBtn.disabled=true;
    createMessage();
    createNewGameBtn();
    
};

function createMessage(){
    msgContainer = document.createElement("div");
    msgContainer.innerText=`Congratulations!\nWINNER IS ${winner} !` ;
    msgContainer.style.height="625px";
    msgContainer.style.color="white";
    msgContainer.style.fontSize="40px";    
    msgContainer.style.backgroundColor="black";
    msgContainer.style.display="flex";
    msgContainer.style.justifyContent="center";
    msgContainer.style.alignItems="center";
    
    container.prepend(msgContainer);
};

function createNewGameBtn(){
    let newGame = document.createElement("button");
    newGame.innerText=`NEW GAME`;
    newGame.style.height="100px";
    newGame.style.width="100vw";
    newGame.style.color="white";
    newGame.style.fontSize="40px";
    newGame.style.backgroundColor="black";
    newGame.style.display="flex";
    newGame.style.justifyContent="center";
    newGame.style.alignItems="center";
    newGame.style.cursor="pointer";
    container.prepend(newGame);
    
    
    newGame.addEventListener("click",() =>{
        reset();
        msgContainer.remove();
        newGame.remove();
        resetBtn.disabled=false;
    })
};

