//math.random() returns a random number between 0 and 1
//
//execicio
let num8magic = Math.floor(Math.random() * 9);

let question = "Will I be a millionaire?";

let answer = "";

if(num8magic === 0) {
    answer = "Yes - definitely."
} else if (num8magic === 1) {
    answer = "It is decidedly so.";
} else if (num8magic === 2) {
    answer = "Without a doubt.";
} else if (num8magic === 3) {
    answer = "Reply hazy, try again.";
} else if (num8magic === 4) {
    answer = "Ask gain later.";
} else if (num8magic === 5) {
    answer = "Better not tell you now.";
} else if (num8magic === 6) {
    answer = "My sources say no.";
} else if (num8magic === 7) {
    answer = "Outlook not so good.";
} else if (num8magic === 8) {
    answer = "Very doubtful.";
}

console.log("Question:       ", question,"\nMagic 8 Ball:   ", answer);
