class Game {

  constructor(wallet = 0, roundNumber = 0, opponentNumber = 0) {
    this.wallet = wallet;
    this.roundNumber = roundNumber;
    this.opponentNumber = opponentNumber;
    this.coinWeight = { "head": 50, "tail": 50 };
  };

  cpu() {
    let options = ["head", "head", "tail", "head", "tail" ];
    let cpuChoice = this.randomArrayItem(options)
    return cpuChoice
  }

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
    return array[Math.floor((Math.random()*array.length))];
  }

  addToWallet() {
    this.wallet = 0;
    this.wallet = prompt(`How much would you like to your wallet?\n`);
    return this.wallet;
  }
  

}


// const myTest = new Game();
// console.log(myTest.cpu());

class CoinFlipper extends Game {

  gameFlow() {
      
    console.log("EACH GAME COSTS $50. THE WINNER TAKES ALL. YOU WILL BE PLAYING ONE OPPONENT PER ROUND WITHIN EACH GAME. EACH PLAYER WILL MAKE A GUESS, IF YOU'RE CORRECT, YOU CAN DECIDE TO KEEP PLAYING OR CASH OUT. TO WIN, YOUR GUESSES HAVE TO BE CORRECT MORE TIMES THAN YOUR OPPONENT. \n")
    const [name, opponents] = this.basicInfo();
    console.log(`\nWELCOME TO THE GAME OF CHANCE AND PROBABILITY. MAY THE ODDS BE WITH YOU ${name.toUpperCase()}. LET'S FFFLLLIIIPPP!!!`);
    
    let count = 0
    let userWinnings = 0;
    let cpuWinnings = 0;

    while (count < Number(opponents)) {
      let cpuGuess = this.cpu()
      let userGuess = prompt(`head or tail: `).toLowerCase()
      let answer = this.randomArrayItem(this.keysGenerator());
      console.log(`cpu: ${cpuGuess} \nuser: ${userGuess} \nanswer: ${answer}\n`)
      // if (userGuess !== 'head' || userGuess !== 'tail') return 'Not an option.';
      if (userGuess === answer) { userWinnings += 1 }
      if (cpuGuess === answer) { cpuWinnings +=1 }
      count++
    }

    if (userWinnings > cpuWinnings)  console.log(`${name}!!! you won.`);
    if (cpuWinnings > userWinnings)  console.log(`cpu won meep morp`);
    if (cpuWinnings === userWinnings)  console.log(`'tis a tie`);

    let playOption = prompt(`Would you like to play again? Y or N: `).toLowerCase();
    if (playOption === 'y') return this.gameFlow();
    if (playOption === 'n') return 'thanks for playing.'
  }

}

const sam = new CoinFlipper();
sam.gameFlow();