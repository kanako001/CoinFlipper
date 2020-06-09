class Game {

  constructor(wallet = 0, roundNumber = 0, opponentNumber = 0) {
    this.wallet = wallet;
    this.roundNumber = roundNumber;
    this.opponentNumber = opponentNumber;
    this.coinWeight = { "head": 50, "tail": 50 };
  };

  basicInfo() {
    let name = prompt(`what's your name?`);
    this.opponentNumber = prompt(`How many opponents would you like to play against?`);
    return [name, this.opponentNumber]
  }

  keysGenerator() {
    let keysContainer = [];
    let keys = Object.keys(this.coinWeight);

    keys.forEach(key => {
      for(let i = 0; i < this.coinWeight[key]; i++) {
        keysContainer.push(key);
      }
    });
    return keysContainer;
  } 


  randomArrayItem(array) {
     console.log(array[Math.floor((Math.random()*array.length))]);
  }

  addToWallet() {
    this.wallet = 0;
    this.wallet = prompt(`How much would you like to your wallet?\n`);
    return this.wallet;
  }
  

}


const myTest = new Game();
// console.log(myTest.gameFlow());



class CoinFlipper extends Game {

  cpu() {
    let options = ["heads", "heads", "tail", "heads", "tail" ];
    let cpuChoice = this.randomArrayItem(options)
    return cpuChoice
  }

  gameFlow() {
      
    console.log("EACH GAME COSTS $50. THE WINNER TAKES ALL. YOU WILL BE PLAYING ONE OPPONENT PER ROUND WITHIN EACH GAME. EACH PLAYER WILL MAKE A GUESS, IF YOU'RE CORRECT, YOU CAN DECIDE TO KEEP PLAYING OR CASH OUT. \n")
    const [name, opponents] = this.basicInfo();
    console.log(`\nWELCOME TO THE GAME OF CHANCE AND PROBABILITY. MAY THE ODDS BE WITH YOU ${name.toUpperCase()}. LET'S FFFLLLIIIPPP!!!`);

  }

}

const sam = new CoinFlipper();
sam.gameFlow();
