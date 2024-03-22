let playerScore=0
let computerScore=0
function getComputerChoice(){
    let options = ['rock','paper','scissors']
    let computerChoice = options[(Math.floor(Math.random() * 3))]
    return computerChoice
}

function getPlayerChoice(){
    let playerChoice = prompt('Between ROCK, PAPERS & SCISSORS choose one!').toLocaleLowerCase();
    return playerChoice
}

for(let i =1;i<6;i++){
    
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    round(computerChoice,playerChoice)
    console.log(`player-score=${playerScore}`)
    console.log(`computer-score=${computerScore}`)
    
}

function updatePlayerScore(){
    playerScore++
}
function updateComputerScore(){
    computerScore++
}
function round(computerChoice,playerChoice){
  
    switch (computerChoice){
        case 'rock':{
            if (playerChoice =='rock'){
                alert("you chose rock and computer chose rock.It's a draw. Try again")
            }
            else if (playerChoice == 'paper'){
                alert("you chose paper and computer chose rock.You win")
                updatePlayerScore()
            }
            else if(playerChoice=='scissors'){
                alert("you chose scissors and computer chose rock.computer wins")
                updateComputerScore()
            }
        }
            break;

        case 'paper':{
            if (playerChoice =='paper'){
                alert("you chose paper and computer chose paper.It's a draw. Try again")
            }
            else if (playerChoice == 'scissors'){
                alert("you chose scissors and computer chose paper.You win")
                updatePlayerScore()
            }
            else if(playerChoice=='rock'){
                alert("you chose rock and computer chose paper.computer wins")
                updateComputerScore()
            }
        }
            break;
        case 'scissors':{
            if (playerChoice == 'scissors'){
                alert("you chose scissors and computer chose scissors.It's a draw. Try again")
            }
            else if (playerChoice == 'rock'){
                alert("you chose rock and computer chose scissors.You win")
                updatePlayerScore()
            }
            else if(playerChoice=='paper'){
                alert("you chose paper and computer chose scissors.computer wins")
                updateComputerScore()
            }
        }
            break;
    }
}

