class CoinFlipper {

  constructor(wallet, bettingPrice = 0, opponentNumber = 0) {
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


}


const myTest = new CoinFlipper(300)
console.log(myTest.randomizer());