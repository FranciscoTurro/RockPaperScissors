let playerCounter = 0;
let machineCounter = 0;

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function oneRound(playerChoice, computerChoice) {
  if (playerChoice == 'Rock') {
    if (computerChoice == 'Scissors') {
      ++playerCounter;
    } else if (computerChoice == 'Paper') {
      ++machineCounter;
    } else {
      ++machineCounter;
      ++playerCounter;
    }
  } else if (playerChoice == 'Scissors') {
    if (computerChoice == 'Scissors') {
      ++playerCounter;
      ++machineCounter;
    } else if (computerChoice == 'Paper') {
      ++playerCounter;
    } else {
      ++machineCounter;
    }
  } else if (playerChoice == 'Paper') {
    if (computerChoice == 'Scissors') {
      ++machineCounter;
    } else if (computerChoice == 'Paper') {
      ++machineCounter;
      ++playerCounter;
    } else {
      ++playerCounter;
    }
  }
}
const buttons = document.querySelectorAll('button'); //returns an array-like object called a node list
buttons.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    const img = buttons.querySelector('img');
    oneRound(img.id, computerPlay());
    const pcounter = document.querySelector('#playerCounter');
    pcounter.textContent = playerCounter;

    const ccounter = document.querySelector('#pcCounter');
    ccounter.textContent = machineCounter;
    gameCheck();
  });
});

function gameCheck() {
  if (playerCounter == 5) {
    alert('w');
    document.location.reload();
  }
  if (machineCounter == 5) {
    alert('l');
    document.location.reload();
  }
}
