//Query Selector Variables:
var easyGame = document.querySelector('.easy-game');
var normalGame = document.querySelector('.normal-game');
var hardGame = document.querySelector('.hard-game');
var gameHubView = document.querySelector('.game-hub-view');
var easyGameView = document.querySelector('.easy-game-view');
var normalGameView = document.querySelector('.normal-game-view');
var hardGameView = document.querySelector('.hard-game-view');
var backToMainButton = document.querySelector('.game-hub-button')
var monsterIcons = document.querySelectorAll('.monster-icon')
// var restartGameButton = document.querySelector('restart-game-button');

//Global Variables:
var game = new Game();

//Event listeners:
easyGame.addEventListener('click', showEasyGame);
normalGame.addEventListener('click', showNormalGame);
hardGame.addEventListener('click', showHardGame);
backToMainButton.addEventListener('click', mainViewGameHub)
// monsterIcons.addEventListener('click', )

// restartGameButton.addEventListener('click', );

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
  hideElements([easyGameView, normalGameView, hardGameView, backToMainButton]);

}

function showEasyGame() {
  showElements([easyGameView, backToMainButton]);
  hideElements([gameHubView, normalGameView, hardGameView]);
}

function showNormalGame() {
  showElements([normalGameView, backToMainButton]);
  hideElements([gameHubView, easyGameView, hardGameView]);
}

function showHardGame() {
  showElements([hardGameView, backToMainButton]);
  hideElements([gameHubView, easyGameView, normalGameView]);
}

function chooseMonster() {
 event
}
// function gameChoicePage(){
//   if (event.target.classList.contains('.easy-game')) {
//     showElement([easyGameView])
//     hideElement([normalGame, hardGame, gameOptions]);
//   } if (event.target.classList.contains('.normal-game')) {
//     showElement([normalGameView])
//     hideElement([easyGame, hardGame, gameOptions]);
//   } if (event.target.classList.contains('.hard-game')) {
//     showElement([hardGameView])
//     hideElement([easyGame, normalGame, gameOptions]);
//   }
// }
//file that contains all DOM related JavaScript
