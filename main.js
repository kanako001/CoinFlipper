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
    this.wallet = prompt(`But first, how much would you like to your wallet? `);
    return Math.abs(this.wallet);
  }
  

}


class CoinFlipper extends Game {

  gameFlow() {
      
    console.log(`THINGS TO NOTE BEFORE YOU START TO FLIP\n- YOU HAVE TO START WITH AT LEAST $500 IN YOUR WALLET\n- YOU CANNOT PLAY MORE THAN 10 OPPONENTS PER GAME.\n- REMEMBER TO HAVE FUN.\n`)
    const [name, opponents] = this.basicInfo();
    if (opponents > 10) return `You cannot play more than 10 players at a time.`
    console.log(`\nWELCOME TO THE GAME OF CHANCE AND PROBABILITY. MAY THE ODDS BE WITH YOU ${name.toUpperCase()}. LET'S FFFLLLIIIPPP!!!\n`);
    
    let count = 0
    let userWinnings = 0;
    let cpuWinnings = 0;
    
    let playerWallet = this.addToWallet();
    if (playerWallet < 500) {
      return'Comeback when you have more money to spare';
    } else {
      console.log(`\nYou now have $${playerWallet}. This cannot be changed through the course of the game. you can increase your money by winning each round. You lose $50 for all each opponent you lose to and you win $50 for every opponent defeated.`);
    }

    while (count < Number(opponents)) {
      let cpuGuess = this.cpu()
      let userGuess = prompt(`\nhead or tail: `).toLowerCase()
      let answer = this.randomArrayItem(this.keysGenerator());
      console.log(`cpu: ${cpuGuess} \nuser: ${userGuess} \nanswer: ${answer}\n`)
      // if (userGuess !== 'head' || userGuess !== 'tail') return 'Not an option.';
      if (userGuess === answer) {
        userWinnings += 1;
      }
      if (cpuGuess === answer) { cpuWinnings +=1 }
      count++
    }
    let totalDifference = userWinnings - cpuWinnings;
    this.wallet = Number(this.wallet);
    this.wallet += 50 * (totalDifference)

    if (userWinnings > cpuWinnings)  console.log(`${name}!!! you won ${userWinnings} rounds. You have $${this.wallet} left in your wallet.`);
    if (cpuWinnings > userWinnings)  console.log(`cpu won meep morp`);
    if (cpuWinnings === userWinnings)  console.log(`'tis a tie`);

    let playOption = prompt(`Would you like to play again? Y or N: `).toLowerCase();
    if (playOption === 'y') return this.gameFlow();
    if (playOption === 'n') return 'thanks for playing.'
  }

}

const sam = new CoinFlipper();
sam.gameFlow();