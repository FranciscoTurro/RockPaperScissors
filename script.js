function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "Rock";
    } else if (compChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function oneRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
             alert("You won! Opponent chose scissors");
        } else if (computerChoice == "Paper") {
            alert( "You lost! Opponent chose paper");
        } else {
            alert( "Its a draw! Opponent chose rock");
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Scissors") {
            alert( "Its a draw! Opponen chose scissors");
        } else if (computerChoice == "Paper") {
            alert( "You won! Opponent chose paper");
        } else {
            alert("You lost! Opponent chose rock");
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Scissors") {
            alert("You lost! Opponent chose scissors");
        } else if (computerChoice == "Paper") {
            alert("Its a draw! Opponent chose paper");
        } else {
            alert("You won! Opponent chose rock");
        }
    } else {
        alert("Please only choose rock, paper or scissors!");
    }
}
function game() {
    let numofGames = prompt("How many games do you want to play?");
    if (isNaN(numofGames)) {
        alert("Please choose only a number of games to play");
    } else {
        for (let i = 0; i < numofGames; i++) {
            alert(oneRound(prompt("what is your pick"), computerPlay()));
        }
    }
}

const buttons = document.querySelectorAll('button'); //returns an array-like object called a node list
buttons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const img = buttons.querySelector('img');
        oneRound(img.id,computerPlay());
        })
})
