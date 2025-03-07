const myNumber = Math.floor(Math.random() * 100); //random number generator for test porpuses
let binary = "";
let num = myNumber;

while (num > 0) {
    if (num % 2 === 0) {
        binary = "0" + binary;
    } else {
        binary = "1" + binary;
    }
    num = Math.floor(num / 2);
}

if(myNumber === 0){
    binary = "0" ;
} //condição extra para o número 0 que nao se enquaixa no loop

console.log("My number %d in binary is %s", myNumber, binary); //output of the binary conversion of the random number