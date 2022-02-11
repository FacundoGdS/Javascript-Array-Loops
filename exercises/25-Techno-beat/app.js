// Add your code here
let lyricsGenerator = (array1) => {
    let boom = "Boom";
    let drop = "Drop the base";
    let break1 = "!!!Break the base!!!";
    let output = "";
    let repetido = 0;
    for (let i = 0; i < array1.lenght; i++) {
        if (array1[i] == 1) {
            repetido++;
            if (repetido == 3) {
                output = output + break1;
                repetido = 0;
            } else { output = output + drop }
        }
        if (array1[i] == 0) { output = output + boom }
    }
    return output;
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))