'use strict';

sum = 0;
array = process.argv.slice(2);
sumTotal = array.forEach(element => {
    sum += Number(element)
});
console.log(sum);

