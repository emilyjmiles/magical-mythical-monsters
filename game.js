class Game {
  constructor(gameChoice) {
    this.human = new Player('HUMAN', 'assets/winner-human-brain.png');
    this.robot = new Player('ROBOT', 'assets/winner-robot.png');
    this.currentWinner = '';
    this.gameStatus = '';
    this.winConditions = {
      unicorn: ['minotaur', 'dragon', 'hydra'],
      minotaur: ['kitsune', 'phoenix', 'leviathan'],
      kitsune: ['unicorn', 'griffin', 'kraken'],
      phoenix: ['unicorn', 'dragon', 'kraken'],
      dragon: ['kitsune', 'griffin', 'leviathan'],
      griffin: ['minotaur', 'phoenix', 'hydra'],
      hydra: ['minotaur', 'dragon', 'leviathan'],
      leviathan: ['unicorn', 'griffin', 'kraken'],
      kraken: ['kitsune', 'phoenix', 'hydra'],
    }
  }

  checkForWinner(humanChoice, robotChoice) {
    console.log('human', humanChoice, robotChoice, 'robot');
    var condition = this.winConditions[humanChoice];
    if (humanChoice === robotChoice) {
      this.currentWinner = '';
      this.gameStatus = `Your monsters are equally matched. Neither may have won, but the battle has just begun!`;
      return;
    }
    if (condition.includes(robotChoice)) {
      this.currentWinner = this.human.token;
      this.gameStatus = `You have triumphed over your opponent! Welcome to the winner's circle.`;
      this.human.increaseWins();
    } else {
      this.currentWinner = this.robot.token;
      this.gameStatus = `Your monster has been defeated. Don't depair, there are still many battles to be fought!`;
      this.robot.increaseWins();
    }
  }

  resetMonsterChoice() {
    this.human.currentMonster = '';
    this.robot.currentMonster = '';
  }
};

// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
