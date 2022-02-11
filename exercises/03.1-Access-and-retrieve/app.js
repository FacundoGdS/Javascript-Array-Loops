//declaring the array
var myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log(myArray[2]);

myArray[4] = null; //Ambas formas son válidas
myArray.splice(4, 0, null);

console.log(myArray[4]);