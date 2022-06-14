class Player {
  constructor(token) {
    this.token = token;
    this.wins = 0;
    this.currentMonster = '';
  }

  humanTurn(monsterChoice){
    this.currentMonster = monsterChoice;
  }

  robotTurn(monsterOptions) {
    this.currentMonster = monsterOptions[Math.floor(Math.random() * monsterOptions.length)].id;
  }

  increaseWins() {
    this.wins++;
  }
};
