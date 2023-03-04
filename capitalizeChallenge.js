// const myString = "developer";

// const myNewString = myString[0].toUpperCase() + myString.slice(1);

// //trim works only at the beginning or end of a string
// const whitespace = "  I would like to trim the whitespace  "
// const trimWhitespace = whitespace.trim()

// const j = trimWhitespace.replace("trim", "get rid of")
// console.log(j)
// console.log(myNewString);
// console.log(trimWhitespace);
// console.log(trimWhitespace.includes("like"))

// let x = myNewString.substring(0,2)
// let z= myNewString.slice(-1)
// console.log(x)
// console.log(z)
// const stringObj = new String(myNewString)
// console.log(stringObj)

// //return primitive value of a variable
// console.log(x.valueOf())

// console.log(j.split(" "))

// //objects have a prototype, and that's where the methods are stored
// //difference between substring and slice: with slice you can start from the
// //end with negative numbers and work backwards

const myString = 'kasey needs to break up with angie'
const newString = myString.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))

console.log(newString.join(" "))