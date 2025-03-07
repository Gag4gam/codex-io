//while loops

//structure
/*
while (condition) {
// code block to be executed
}
=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal
%s string console.log options
%d number console.log optionsw
*/

//exercicio

const luckyNumber = 7;
let guess = Math.floor(Math.random()*10)+1;

while (guess !== luckyNumber){
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random()*10)+1;
}

console.log("My Lucky number is %d!", guess);