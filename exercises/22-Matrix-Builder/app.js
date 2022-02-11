// Code goes here
const matrixBuilder = (number) => {
    let matrixArray = [];
    for (let i = 0; i < number; i++) {
        let internalArray = [];
        for (let ind = 0; ind < number; ind++) {
            let random = Math.floor(Math.random() * 2);
            internalArray.push(random);
        }
        matrixArray.push(internalArray);
    }
    return matrixArray;
}


// do not change anything from this line down
console.log(matrixBuilder(5))