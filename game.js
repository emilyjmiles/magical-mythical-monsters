class Game {
  constructor(human, robot, gameType) {
    this.human = new Player(human);
    this.robot = new Player(robot);
    this.type = gameType;
    this.monsters = [];
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

  gameMonsterOptions(){
    if (this.type === 'easy') {
      this.monsters = ['unicorn', 'minotaur', 'kitsune'];
    } if (this.type === 'medium') {
      this.monsters = ['unicorn', 'minotaur', 'kitsune', 'phoenix', 'dragon', 'griffin'];
    } if (this.type === 'hard')
    this.fighters = ['unicorn', 'minotaur', 'kitsune', 'phoenix', 'dragon', 'griffin', 'hydra', 'leviathan', 'kraken'];
  }
};

// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
