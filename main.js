class CoinFlipper {

  constructor(wallet = 0, bettingPrice = 0, opponentNumber = 0) {
    this.wallet = wallet;
    this.bettingPrice = bettingPrice;
    this.opponentNumber = opponentNumber;
    this.coinWeight = { "head": 50, "tail": 50 };
  };

  keysGenerator() {
    let keysContainer = [];
    let keys = Object.keys(this.coinWeight);

    keys.forEach(key => {
      for(let i = 0; i < this.coinWeight[key]; i++) {
        keysContainer.push(key);
      }
    });
    return keysContainer
  } 


  randomizer() {
    return this.keysGenerator()[Math.floor((Math.random()*this.keysGenerator().length))]
  }

  addToWallet() {
    this.wallet = 0;
    this.wallet = prompt(`How much would you like to your wallet?\n`);
    return this.wallet;
  }


}


const myTest = new CoinFlipper()
console.log(myTest.addToWallet());