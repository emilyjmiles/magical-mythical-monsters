//Query Selector Variables:
var easyGame = document.querySelector('.easy-game');
var normalGame = document.querySelector('.normal-game');
var hardGame = document.querySelector('.hard-game');
var gameHubView = document.querySelector('.game-hub-view');
var easyGameView = document.querySelector('.easy-game-view');
var normalGameView = document.querySelector('.normal-game-view');
var hardGameView = document.querySelector('.hard-game-view');
var winnerPageView = document.querySelector('.winner-page-view');
var backToMainButton = document.querySelector('.game-hub-button');
var easyMonsterIcons = document.querySelectorAll('.easy-monster-icon');
var normalMonsterIcons = document.querySelectorAll('.normal-monster-icon');
var hardMonsterIcons = document.querySelectorAll('.hard-monster-icon');
var announceWinner = document.querySelector('.announce-winner');
var humanWins = document.querySelector('.human-wins');
var robotWins = document.querySelector('.robot-wins');
// var restartGameButton = document.querySelector('restart-game-button');

//Global Variables:
var game = new Game();
// var monsterOptions = [];

//Event listeners:
easyGame.addEventListener('click', showEasyGame);
normalGame.addEventListener('click', showNormalGame);
hardGame.addEventListener('click', showHardGame);
backToMainButton.addEventListener('click', mainViewGameHub);
// restartGameButton.addEventListener('click', clearWinCount);

//Functions and Methods:
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

function mainViewGameHub() {
  showElements([gameHubView]);
  hideElements([easyGameView, normalGameView, hardGameView, winnerPageView, backToMainButton]);
}


function showEasyGame() {
  addEventListener(easyMonsterIcons);
  showElements([easyGameView, backToMainButton]);
  hideElements([gameHubView, normalGameView, hardGameView, winnerPageView]);
}

function showNormalGame() {
  addEventListener(normalMonsterIcons);
  showElements([normalGameView, backToMainButton]);
  hideElements([gameHubView, easyGameView, hardGameView, winnerPageView]);
}

function showHardGame() {
  addEventListener(hardMonsterIcons);
  showElements([hardGameView, backToMainButton]);
  hideElements([gameHubView, easyGameView, normalGameView, winnerPageView]);
}

function addEventListener(monsterOptions) {
  for (let i = 0; i < monsterOptions.length; i++) {
    monsterOptions[i].addEventListener('click', function(event){
      playGame(event.target.id, monsterOptions);
    })
  }
}

function playGame(humanChoice, monsterOptions) {
  game.human.humanTurn(humanChoice);
  game.robot.robotTurn(monsterOptions);
  game.checkForWinner(game.human.currentMonster, game.robot.currentMonster);
  displayGameResults(game.human.currentMonster, game.robot.currentMonster, game.gameStatus);
  updateWinCount();
  showElements([winnerPageView, backToMainButton]);
  hideElements([gameHubView, easyGameView, normalGameView, hardGameView]);
}

function updateWinCount() {
  humanWins.innerHTML = `WINS: ${game.human.wins}`;
  robotWins.innerHTML = `WINS: ${game.robot.wins}`;
}

function displayGameResults(humanChoice, robotChoice, gameStatus) {
  announceWinner.innerHTML = '';
  announceWinner.innerHTML +=
  `<img src="${game.currentWinner}"/>
  <h2>${gameStatus}</h2>
  <box>${humanChoice} VS ${robotChoice}</box>`
}

// function clearWinCount() {
//   game.human.wins = 0;
//   game.robot.wins = 0;
// }
// function resetGame() {
//   setTimeout(playGame, 3000);
// }
//file that contains all DOM related JavaScript
