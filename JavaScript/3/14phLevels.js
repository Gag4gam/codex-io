/*
else if
if (conditionA) {
  // Do this
} else if (conditionB) {
  // Do this, instead
} else {
  // Do this if none of the above are true
}
*/

//exercicio
let ph = Math.floor(Math.random() * 15);

console.log(ph);

if (ph > 7) {
    console.log("Basic");
} else if (ph < 7) {
    console.log("Acidic");
} else {
    console.log("Neutral");
}