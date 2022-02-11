let i = 20;
do {
    if(i%5 === 0) {
        console.log(i + '!');
    } else {
        console.log(i);
    }
    i--;
    if(i === 0){
        console.log('LIFTOFF');
    }
} while (i > 0);
