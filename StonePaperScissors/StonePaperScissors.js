
document.addEventListener("DOMContentLoaded", () => {
        
    const choices= document.querySelectorAll(".option");
    const compScoreDiv = document.querySelector("#comp-score");
    const myScoreDiv = document.querySelector("#my-score");

    let msg = document.querySelector("#message");
    let myScore=0;
    let compScore=0;
    let userWin = true ;


    function compChoiceGen(){
        const choiceArr = ['rock', 'paper' ,'scissors'];
        const randIndex = Math.floor((Math.random()*3));
        return choiceArr[randIndex];
    }

    function game(userChoice,compChoice){
        if(userChoice===compChoice){
            drawGame();
        }
        else if (userChoice==='rock'){ 
            userWin= compChoice==="paper" ? false :true ;
        }
        else if (userChoice==='paper'){ 
            userWin= compChoice==="scissors" ? false :true ;
        }
        else{
            userWin= compChoice==="rock" ? false :true ;
        }
        return userWin;
    }

    function drawGame(){
        userWin="draw";
    }

    choices.forEach(choice => {
        choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id");
            const compChoice = compChoiceGen();
            
            console.log(userChoice);
            console.log(compChoice);
            
            const result=game(userChoice,compChoice);    
            console.log(result);    
            if (result===true){
                myScore++;
                msg.innerText=" YOU WIN !";
                msg.style.backgroundColor = "chartreuse";
            }
            else if (result==="draw"){
                msg.innerText="IT IS A DRAW !";
                msg.style.backgroundColor="black";
            }
            else{ 
                compScore++;
                msg.innerText=" YOU LOSE !";
                msg.style.backgroundColor = "red";
            }
            myScoreDiv.innerText=`${myScore}`;
            compScoreDiv.innerText=`${compScore}`;
            console.log(myScore);    
            console.log(compScore);    
        });    
    });

});
