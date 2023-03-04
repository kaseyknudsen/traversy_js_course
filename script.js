// primitive types: stored directly in the 'stack' where it is accessed from
// reference types: stored in the heap and accessed by reference
//     -arrays, functions, objects

//these values are stored on the stack
const name = "John";
const age = 30;

//reference values stored on the heap
const person = {
  name: "Brad",
  age: 40,
};

let newName = name;
newName = "Kasey";

let newPerson = person

console.log(name, newName);
console.log(person, newPerson);
