var readlineSync = require("readline-sync");
Math.random();

const mySet1 = new Set();

const eqSet = (as, bs) => {
  if (as.size !== bs.size) {
    return false;
  }
  for (const a of as) {
    if (!bs.has(a)) {
      return false;
    }
  }
  return true;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getLotto() {
  let lottoNumbers = new Set();
  N = 7;
  while (N > 0) {
    lottoNumbers.add(getRandomInt(9));
    N -= 1;
  }
  return lottoNumbers;
}

N = 7;
while (N > 0) {
  var number = readlineSync.question("May I have a lottonumber? ");
  mySet1.add(number);
  console.log(mySet1);
  N -= 1;
}
let lottonumbers = getLotto();
let weeks = 0;
// taitaa mennä äärettömään looppiin
while (!eqSet(lottonumbers, mySet1)) {
  lottonumbers = getLotto();
  weeks += 1;
}

console.log(weeks);
