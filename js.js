let playerChoice = ''

let playerScore= 0
let computerScore = 0
const playerNumber = document.querySelector('#playerNumber')
const computerNumber = document.querySelector('#computerNumber')
const pvc_btn = document.querySelector('#pvc')
const playerBox = document.querySelector('#player-box')
const computerBox = document.querySelector('#computer-box')
pvc_btn.addEventListener('click',()=>{
    // console.log('pvc button pressed')
})
const getPlayerChoice = document.querySelector('#game-btns')
getPlayerChoice.addEventListener('click',(e)=>{
    if(e.target.matches('button')){
        playerChoice = e.target.innerText.toLowerCase()
        round(getComputerChoice(),playerChoice)
        
    }
    
})
function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(computerChoice)
    computerImgholder(computerChoice)
    return computerChoice
}
function computerImgholder(computerChoice){
    if (computerChoice =='rock'){
        const rockImgholder = document.createElement('img')
        computerBox.appendChild(rockImgholder)
        rockImgholder.setAttribute('src','./images/rock.png')   
    }
    else if (computerChoice == 'paper'){
        const paperImgholder = document.createElement('img')
        computerBox.appendChild(paperImgholder)
        paperImgholder.setAttribute('src','./images/paper.png')   
    }
    else if(computerChoice=='scissors'){
        const scissorsImgholder = document.createElement('img')
        computerBox.appendChild(scissorsImgholder)
        scissorsImgholder.setAttribute('src','./images/scissors.png') 
        updateComputerScore()
    }
    
}
function updatePlayerScore(){
    playerScore++
    playerNumber.textContent = playerScore;
}
function updateComputerScore(){
    computerScore++
    computerNumber.textContent = computerScore;
}
function round(computerChoice, playerChoice) {
    switch (computerChoice) {
        case 'rock': {
            if (playerChoice == 'rock') {
                const rockImgholder = document.createElement('img');
                playerBox.appendChild(rockImgholder);
                rockImgholder.setAttribute('src', './images/rock.png');
            } else if (playerChoice == 'paper') {
                const paperImgholder = document.createElement('img');
                playerBox.appendChild(paperImgholder);
                paperImgholder.setAttribute('src', './images/paper.png');
                updatePlayerScore();  // Modified: Update player score
            } else if (playerChoice == 'scissors') {
                const scissorsImgholder = document.createElement('img');
                playerBox.appendChild(scissorsImgholder);
                scissorsImgholder.setAttribute('src', './images/scissors.png');
                updateComputerScore();  // Modified: Update computer score
            }
            break;
        }
        case 'paper': {
            if (playerChoice == 'paper') {
                const paperImgholder = document.createElement('img');
                playerBox.appendChild(paperImgholder);
                paperImgholder.setAttribute('src', './images/paper.png');
            } else if (playerChoice == 'scissors') {
                const scissorsImgholder = document.createElement('img');
                playerBox.appendChild(scissorsImgholder);
                scissorsImgholder.setAttribute('src', './images/scissors.png');
                updatePlayerScore();  // Modified: Update player score
            } else if (playerChoice == 'rock') {
                const rockImgholder = document.createElement('img');
                playerBox.appendChild(rockImgholder);
                rockImgholder.setAttribute('src', './images/rock.png');
                updateComputerScore();  // Modified: Update computer score
            }
            break;
        }
        case 'scissors': {
            if (playerChoice == 'scissors') {
                const scissorsImgholder = document.createElement('img');
                playerBox.appendChild(scissorsImgholder);
                scissorsImgholder.setAttribute('src', './images/scissors.png');
            } else if (playerChoice == 'rock') {
                const rockImgholder = document.createElement('img');
                playerBox.appendChild(rockImgholder);
                rockImgholder.setAttribute('src', './images/rock.png');
                updatePlayerScore();  // Modified: Update player score
            } else if (playerChoice == 'paper') {
                const paperImgholder = document.createElement('img');
                playerBox.appendChild(paperImgholder);
                paperImgholder.setAttribute('src', './images/paper.png');
                updateComputerScore();  // Modified: Update computer score
            }
            break;
        }
    }
}

