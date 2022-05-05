function computerPlay() {
    let x = Math.floor(Math.random() * 3); 
    if (x == 0) {
        return('Rock');
    }
    else if (x == 1) {
        return('Paper');
    }
    else {
        return('Scissors');
    }
}

function oneRound(playerChoice, computerChoice) {
    if (playerChoice == 'Rock') {
        if (computerChoice == 'Scissors') {
            return('You won! Opponent chose scissors');
        }
        else if (computerChoice == 'Paper') {
            return('You lost! Opponent chose paper');
        }
        else {
            return('Its a draw! Opponent chose rock');
        }
    }

    else if (playerChoice == 'Scissors') {
        if (computerChoice == 'Scissors') {
            return('Its a draw! Opponen chose scissors');
        }
        else if (computerChoice == 'Paper') {
            return('You won! Opponent chose paper');
        }
        else {
            return('You lost! Opponent chose rock');
        }
    }

    else if (playerChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            return('You lost! Opponent chose scissors');
        }
        else if (computerChoice == 'Paper') {
            return('Its a draw! Opponent chose paper');
        }
        else {
            return('You won! Opponent chose rock');
        }   
    }
}
function game() {
    let x = prompt('How many games do you want to play?')
    for (let i = 0;i < x;i++) {
        alert((oneRound(prompt('what is your pick'),computerPlay())));
    }
}
game();