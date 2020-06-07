const coinFlipper = function () {
  let runningTotal = 0;
  
  const coinWeight = { "head": 50,"tail": 50 };
  let keyContainer = new Array;
  let weightKeys = Object.keys(coinWeight);

  weightKeys.forEach(key => {
    for(let i = 0; i < coinWeight[key]; i++) {
      keyContainer.push(key);
    }
  });

  return keyContainer;
}


Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


coinFlipper().random();

