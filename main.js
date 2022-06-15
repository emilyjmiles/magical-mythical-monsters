
var gameHubView = document.querySelector('.game-hub-view');
var easyGameView = document.querySelector('.easy-game-view');
var normalGameView = document.querySelector('.normal-game-view');
var hardGameView = document.querySelector('.hard-game-view');
var winnerPageView = document.querySelector('.winner-page-view');

var easyGame = document.querySelector('.easy-game');
var normalGame = document.querySelector('.normal-game');
var hardGame = document.querySelector('.hard-game');
var changeGameButton = document.querySelector('.change-game-button');
var restartGameButton = document.querySelector('.restart-game-button');
var easyMonsterIcons = document.querySelectorAll('.easy-monster-icon');
var normalMonsterIcons = document.querySelectorAll('.normal-monster-icon');
var hardMonsterIcons = document.querySelectorAll('.hard-monster-icon');

var announceWinner = document.querySelector('.announce-winner');
var humanWins = document.querySelector('.human-wins');
var robotWins = document.querySelector('.robot-wins');

var game = new Game();

easyGame.addEventListener('click', showEasyGame);
normalGame.addEventListener('click', showNormalGame);
hardGame.addEventListener('click', showHardGame);
changeGameButton.addEventListener('click', showMainGameHub);
restartGameButton.addEventListener('click', clearWinCount);

function hideElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function showElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function addEventToMonsters(monsterOptions) {
  for (let i = 0; i < monsterOptions.length; i++) {
    monsterOptions[i].addEventListener('click', function(event){
      playGame(event.target.id, monsterOptions);
    })
  }
}

function showMainGameHub() {
  showElements([gameHubView]);
  hideElements([easyGameView, normalGameView, hardGameView, winnerPageView, changeGameButton, restartGameButton]);
}

function showEasyGame() {
  game.gameChoice = easyGameView;
  addEventToMonsters(easyMonsterIcons);
  resetEasyGame();
}

function resetEasyGame() {
  showElements([easyGameView, changeGameButton, restartGameButton]);
  hideElements([gameHubView, normalGameView, hardGameView, winnerPageView]);
}

function showNormalGame() {
  game.gameChoice = normalGameView;
  addEventToMonsters(normalMonsterIcons);
  resetNormalGame();
}

function resetNormalGame() {
  showElements([normalGameView, changeGameButton, restartGameButton]);
  hideElements([gameHubView, easyGameView, hardGameView, winnerPageView]);
}

function showHardGame() {
  game.gameChoice = hardGameView;
  addEventToMonsters(hardMonsterIcons);
  resetHardGame()
}

function resetHardGame() {
  showElements([hardGameView, changeGameButton, restartGameButton]);
  hideElements([gameHubView, easyGameView, normalGameView, winnerPageView]);
}

function playGame(humanChoice, monsterOptions) {
  game.human.humanTurn(event.target.id);
  game.robot.robotTurn(monsterOptions);
  game.checkForWinner(game.human.currentMonster, game.robot.currentMonster);
  displayGameResults(game.human.currentMonster, game.robot.currentMonster, game.gameStatus);
  updateWinCount();
  backToGame();
  console.log('henlo');
}

function displayGameResults(humanChoice, robotChoice, gameStatus) {
  showElements([winnerPageView, changeGameButton]);
  hideElements([gameHubView, easyGameView, normalGameView, hardGameView, changeGameButton, restartGameButton]);
  announceWinner.innerHTML = '';
  announceWinner.innerHTML +=
  `<img src="${game.currentWinner}"/>
  <h2>${gameStatus}</h2>
  <img src="assets/${humanChoice}-icon.png"/><a> VS </> <img src="assets/${robotChoice}-icon.png"/>`
}

function updateWinCount() {
  humanWins.innerHTML = `WINS: ${game.human.wins}`;
  robotWins.innerHTML = `WINS: ${game.robot.wins}`;
}

function backToGame() {
  if (game.gameChoice === easyGameView) {
    setTimeout(resetEasyGame, 1500);
  } else if (game.gameChoice === normalGameView) {
    setTimeout(resetNormalGame, 1500);
  } else if (game.gameChoice === hardGameView) {
    setTimeout(resetHardGame, 1500);
  }
}

function clearWinCount() {
  game.human.wins = 0;
  game.robot.wins = 0;
  humanWins.innerHTML = `WINS: ${game.human.wins}`;
  robotWins.innerHTML = `WINS: ${game.robot.wins}`;
}
