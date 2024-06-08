//Function 1
function validDenomination(coin) {
    const validCoins = [1, 5, 10, 25, 50, 100];
    return validCoins.indexOf(coin) !== -1;
}

//Function 2 
const valueFromCoinObject = (obj) => {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
};

//Function 3
const valueFromArray = (arr) => arr.reduce((totalValue, coinObj) => totalValue + valueFromCoinObject(coinObj), 0);

//Function 4 
const coinCount = (...coinage) => valueFromArray(coinage);
module.exports = { validDenomination, valueFromCoinObject, valueFromArray, coinCount };

//Calling the functions

const { validDenomination, valueFromCoinObject, valueFromArray, coinCount } = require('CIT281/P3/p3-module.js');

console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));

const coins = [{ denom: 25, count: 2 }, { denom: 1, count: 7 }];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins)); 
