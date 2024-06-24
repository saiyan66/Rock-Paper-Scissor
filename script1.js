function ComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return("It's a Draw!");
    }
        else if ((playerSelection === "Rock") && (computerSelection === "Scissor")){
            return("You Win! Rock beat Scissor");
        }
        
        else if ((playerSelection === "Rock") && (computerSelection === "Paper")){
            return("You Lose! Paper beat Rock")
}

        else if ((playerSelection === "Paper") && (computerSelection === "Rock")){
            return("You Win! Paper beat Rock");
        }

        else if ((playerSelection === "Paper") && (computerSelection === "Scissor")){
            return("You Lose! Scissor beat Paper");
         }
        
        else if ((playerSelection === "Scissor") && (computerSelection === "Paper")){
            return("You Win! Scissor beat Paper");

        }  
        else if ((playerSelection === "Scissor") && (computerSelection === "Rock")){
            return("You Lose! Rock beat Scissor");
        }
}

        let computerSelection= ComputerChoice();
        let playerSelection= prompt("Choose your weapon:");
        console.log(ComputerChoice());
        console.log(playRound(playerSlection, computerSelection));


