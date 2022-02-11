let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let parWithoutSpaces = par.replace(/ /g, "");
let parArrayLetters = parWithoutSpaces.split("");

for(let i = 0; i < parArrayLetters.length; i++) {
    const letter = parArrayLetters[i].toLowerCase();
    if (letter in counts) {
        counts[letter] = counts[letter] + 1;
    } else {
        counts[letter] = 1
    }
}

console.log(counts);