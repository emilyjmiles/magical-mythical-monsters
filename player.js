class Player {
  constructor(player, token) {
    this.name = player; //human or robot
    this.token = token; //avatar image
    this.wins = 0; //win counter
    this.currentMonster = '';
  }

  takeTurn(monsterChoice, monsterOptions) {
    if (this.name === 'HUMAN') {
      humanTurn(monsterChoice);
    } else {
      robotTurn(monsterOptions);
    }
  }

  humanTurn(monsterChoice){
    this.currentMonster = monsterChoice;
  }

  robotTurn(monsterOptions) {
    this.currentMonster = monsterOptions[Math.floor(Math.random() * monsterOptions.length)].id;
  }

  increaseWins() {
    this.wins +=1;
  }
};

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// takeTurn
