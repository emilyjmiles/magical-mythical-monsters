#Magical Mythical Monsters Overview
This variation of the classic Rock, Paper, Scissors game, allows the user to pick from three different difficulty levels to play against a 'Robot', or in this case the computer. The user can choose from three mythical monsters on the 'easy game' level, six mythical monsters on the 'normal game' level, and nine mythical monsters on the 'difficult game' level. This web game was built utilizing HTML, CSS, and JavaScript.

[Click here to play Magical Mythical Monsters.](https://emilyjmiles.github.io/magical-mythical-monsters/)

## Gameplay Demonstration

**How to play Magical Mythical Monsters:**

  - Choose the game option you want to play: 'Forest of Wonder - Easy Game', 'Summit of Doom - Normal Game', or 'Ocean of Ruin - Difficult Game'
  - Choose your mythical monster and play against the 'Robot' computer player!
  - A screen with your choice, the Robot's choice, and the winner announcement will briefly appear.
  - The winner's score will be updated during each round.
  - Click the 'Change Game Choice' button to choose a different game option.
  - The score for each player will remain the same, even if you change the game option you are playing.
  - You can clear the number of wins by clicking the 'Reset Game Score' button, if you would like to start over.

## Programming Languages and Dependencies

**This app was developed using:**

- HTML
- CSS
- JavaScript

## Code Architecture

The web game application consists of one HTML page, one CSS file, three JavaScript files, and an assets directory:

1. A player.js file that contains a Player class.
Player methods include:
    - constructor with the following properties: token (human or robot avatar), wins (ex: 0), and currentMonster (ex: 'dragon');
    - humanTurn
    - robotTurn
    - increaseWins

1. A game.js file that contains a Game class.
Game methods include:
    - constructor with the following properties: human (user instance of the Player class), robot (computer instance of the Player class), gameChoice (ex: 'normal'), currentWinner, gameStatus, and winConditions (ex: kitsune: ['unicorn', 'griffin', 'kraken'] where the 'kitsune' monster beats all the monsters within the object array).
    - checkForWinner

1. A main.js file contains a new instance of the Game class and all DOM related JavaScript.

## Challenges & Wins

Building this game from scratch without the usual project iteration prompts, required careful planning and problem solving. I utilized pseudo coding and asked my fellow cohort mates to be my rubber duck for my JavaScript logic. I struggled with some of the Game class functionality, but ultimately had the correct logic that needed to be implemented. Maintaining and refactoring DRY code went well, with the exception of my HTML file where I could have had a more clear concise way of organizing my code to avoid repetitive code blocks. My biggest challenge was working through a gameplay bug that miss counted the user and robot wins. Unfortunately, I was unable to resolve the bug in time, but look forward to solving that issue in the future. Overall, this project really brought me out of my comfort zone as a new developer, but I am happy with the end product.

## Contributions

_This app was developed by:_

- [Emily Miles](https://github.com/emilyjmiles)

_Emily is a student of front-end engineering at the Turing School of Software & Design._

Project spec and assets provided by the [Turing School of Software & Design](https://turing.edu/).
