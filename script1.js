function computerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return("It's a Draw!");
    }
        else if ((playerSelection === "rock") && (computerSelection === "scissor")){
            return("You Win! rock beat scissor");
        }
        
        else if ((playerSelection === "rock") && (computerSelection === "paper")){
            return("You Lose! paper beat rock")
        }

        else if ((playerSelection === "paper") && (computerSelection === "rock")){
            return("You Win! paper beat rock");
        }

        else if ((playerSelection === "paper") && (computerSelection === "scissor")){
            return("You Lose! scissor beat paper");
        }
        
        else if ((playerSelection === "scissor") && (computerSelection === "paper")){
            return("You Win! scissor beat paper");

        } 

        else if ((playerSelection === "scissor") && (computerSelection === "rock")){
            return("You Lose! rock beat scissor");
        }
}

        let computerSelection= computerChoice();
        let playerSelection= prompt("Choose your weapon:");
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));


