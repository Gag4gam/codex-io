//logical operators
// && logica AND, verdadeiro se ambos sao verdadeiros
// || logica Or, verdadeiro se pelo menos um é verdadeiro
// ! lociga NOT, inverte o valor
//
//
//execicio
let aqui = 34;


if (aqui >= 0 && aqui <= 50) {
    console.log("Air Quality: Good");
} else if(aqui >= 51 && aqui <= 100) {
    console.log("Air Quality: Moderate");
} else if(aqui >= 101 && aqui <= 150) {
    console.log("Air Quality: Unhealthy (Sensitive Groups)");
} else if(aqui >= 151 && aqui <= 200) {
    console.log("Air Quality: Unhealthy");
} else if(aqui >= 201 && aqui <= 300) {
    console.log("Air Quality: Very Unhealthy");
} else if(aqui >= 301) {
    console.log("Air Quality: Hazardous");
}


