//continue
//example
/*
for (let i = 0; i < 5; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}
*/
//break
/*
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
*/

for(let i = 1; i<=50; i++){
    if (i % 2 !== 0){
        continue;
    }
    if (i === 42){
      console.log("42");
      break;
    }
    console.log(i);
}