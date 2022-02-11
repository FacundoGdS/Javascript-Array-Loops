var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

const findMax = (array1) => {
    let auxiliary = 0;
    array1.forEach(element => {
        if(auxiliary < element){auxiliary = element}
    });
    return auxiliary;
}

console.log(findMax(myArray));

// for(let i = 0 ; i < array1.length; i++){
//     if (auxiliary < array1[i]) {
//         auxiliary = array1[i];
//     }
// }