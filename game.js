class Game {
  constructor(gameChoice) {
    this.human = new Player('assets/winner-human-brain.png');
    this.robot = new Player('assets/winner-robot.png');
    this.gameChoice = gameChoice;
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
    var condition = this.winConditions[humanChoice];
    if (humanChoice === robotChoice) {
      this.currentWinner = '';
      this.gameStatus = `Your monsters are equally matched. Neither may have won, but the battle has just begun!`;
    } else if (condition.includes(robotChoice)) {
      this.currentWinner = this.human.token;
      this.human.increaseWins();
      this.gameStatus = `You have triumphed over your opponent! Welcome to the winner's circle.`;
    } else {
      this.currentWinner = this.robot.token;
      this.robot.increaseWins();
      this.gameStatus = `Your monster has been defeated. Don't despair, there are still many battles to be fought!`;
    }
  }
};
