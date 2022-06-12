class Player {
  constructor(player, token) {
    this.name = player; //human or robot
    this.token = token; //avatar image
    this.wins = 0; //win counter
    this.currentMonster = '';
  }

  takeTurn(monsterOptions) {
    if (this.name === 'HUMAN') {
      this.currentMonster = monsterOptions;
    }
    this.currentMonster = monsterOptions[Math.floor(Math.random() * monsterOptions.length)];
  }

  winIncrementor() {
    this.wins +=1;
  }
};

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
