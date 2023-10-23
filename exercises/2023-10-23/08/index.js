function doIt() {
  console.log("hello");
}

console.log(typeof doIt);
// this outputs "Function" because doIt is defined as a function.

console.log(doIt instanceof Function);
// periaatteessa tässä kysytään että onko doIt funktion instanssi... (Ja funktiothan ovat objekteja).
// object instanceof constructor, objektia testataan kontruktoria vastaan

var myFunc = new Function("", 'console.log("hello")');
myFunc.call();
// tämähän oli se mitä "konepellin alla" tapahtuu kun tekee tollaisen
// normaalin funktion kuten doIt().
