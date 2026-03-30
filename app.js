const choices = document.querySelectorAll(".choice");

const you = document.querySelector("#user");
const compu = document.querySelector("#comp");
const Msg = document.querySelector("#msg");
let userCount = 0;
let compCount = 0;


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        compChoice();
        gamePlay(userChoice);
        you.setAttribute("count");
    });
});



function compChoice(){
    const collection = ["rock","paper","scissors"];
    const compVal = Math.floor(Math.random()*3);
    return collection[compVal];
}


const drawGame = () => {
    Msg.style.backgroundColor = "yellow";
    Msg.innerText = "Game was Draw. Play again !"
}



// Check The User Wins OR Lose !
const Winner = (winUser) => {
    if(winUser){
        userCount++;
        you.innerText = userCount;
        Msg.style.backgroundColor = "green";
        Msg.innerText = "Congratulations  You Won ! 🎉 ";
    }
    else{
        compCount++;
        compu.innerText = compCount;
        Msg.style.backgroundColor = "red";
        Msg.innerText = "You Lose ! Try Again 😞";
    }
};



//

const gamePlay = (userChoice) => {
    const compchoice = compChoice();
    console.log("User Choice =",userChoice);
    console.log("Computer Choice = ",compchoice);

    if(userChoice === compchoice) {
        drawGame();
    } else{
        let winUser = true;
        if(userChoice === "rock"){
            winUser = compchoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            winUser = compchoice === "scissors" ? false : true;
        }
        else{
            winUser = compchoice === "rock" ? false:true;
        }
        Winner(winUser);
    }
};
