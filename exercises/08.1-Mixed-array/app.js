var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let mixtype = [];

const newArrayTypes = (array1, array2) => {
    for (let i = 0; i < array1.length; i++ ) {
        array2.push(typeof array1[i]);
    }
    console.log(array2);
}

newArrayTypes(mix, mixtype);