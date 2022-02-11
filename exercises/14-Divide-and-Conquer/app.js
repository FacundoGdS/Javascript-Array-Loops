let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

const mergeTwoList = (array) => {
    let odd = array.filter(item => item%2!=0);
    let even = array.filter(item => item%2==0);
    even.forEach(item => odd.push(item));
    return odd;
}


console.log(mergeTwoList(list_of_numbers))
