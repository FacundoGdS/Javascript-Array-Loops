var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

const deletePerson = (name) => {
    let newArray = people.filter(person => person != name);
    return newArray;
}

let newArr1 = deletePerson("daniella");
let newArr2 = deletePerson("juan");
let newArr3 = deletePerson("emilio");

console.log(newArr1);
console.log(newArr2);
console.log(newArr3);

// console.log(deletePerson('daniella'));
// console.log(deletePerson('juan'));
// console.log(deletePerson('emilio'));
