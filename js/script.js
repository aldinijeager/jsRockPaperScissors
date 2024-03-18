function getComputerChoice() 
{
    let random = parseInt(Math.random() * 100) % 3 + 1;
    if(random == 1) return "rock";
    if(random == 2) return "paper";
    return "scissors";
}

function playRound(playersSelection, computersSelection)
{
    console.log(`Computer :${computersSelection} | Player :${playersSelection}`)
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