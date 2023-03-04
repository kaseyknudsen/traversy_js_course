let x;
let v;
let j;

const num = new Number(5.432)
x = num.toString()
console.log(num)
console.log(x)

//you can get the length of a number like this!
j = 378294;

v = j.toString().length
console.log(v)

//this will give us the number of decimals
//it will turn it into a string representation of a decimal
x = j.toFixed(2)
console.log(x)
console.log(typeof x)

//to precision gives us the whole number 
 x = num.toPrecision(2) //this will give us 2 digits TOTAL
 console.log(x)

 x = num.toExponential(2)
 console.log(x)

 x = num.valueOf()
 console.log(x)

 x = Number.MAX_VALUE
 console.log(x)

 x = Number.MIN_VALUE
 console.log(x)

