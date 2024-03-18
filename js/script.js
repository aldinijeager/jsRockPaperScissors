function getComputerChoice() 
{
    let random = parseInt(Math.random() * 100) % 3 + 1;
    if(random == 1) return "rock";
    if(random == 2) return "paper";
    return "scissors";
}

function playRound(playersSelection, computersSelection)
{
    const choiceBoard = document.querySelector("#choiceBoard");
    choiceBoard.textContent = `Computer :${computersSelection} | Player :${playersSelection}`;
    const WIN  = "You won";
    const LOSE = "You lost";
    const TIE  = "It's a tie";
    if(playersSelection == "rock") 
    {
        if(computersSelection == "scissors") return WIN;
        if(computersSelection == "paper") return LOSE;
        return TIE;
    }

    if(playersSelection == "paper") 
    {
        if(computersSelection == "scissors") return LOSE;
        if(computersSelection == "rock") return WIN;
        return TIE;
    }

    if(playersSelection == "scissors") 
    {
        if(computersSelection == "rock") return LOSE;
        if(computersSelection == "paper") return WIN
        return TIE;
    }
}

const btn = document.querySelectorAll(".move");
const scoreBoard = document.querySelector("#scoreBoard");
const winBoard = document.querySelector("#winBoard");
const reset = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0;

btn.forEach((item) => {
    item.addEventListener("click",() => {
        let result = playRound(item.value,getComputerChoice());
        if(result == "You won") ++playerScore;
        if(result == "You lost") ++computerScore;
        
        scoreBoard.textContent = `Player ${playerScore}  Computer ${computerScore}`

        if(playerScore == 5)
        {
            winBoard.textContent = "You won";
        }
        if(computerScore == 5)
        {
            winBoard.textContent = "You lost";
        }
    });
});

reset.addEventListener("click", () => 
{
    playerScore = 0;
    computerScore = 0;
    winBoard.textContent = "";
    scoreBoard.textContent = "Player 0  Computer 0";
})
