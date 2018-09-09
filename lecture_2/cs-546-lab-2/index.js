const geometry = require('./geometry');
const utilities = require('./utilities');

console.log("test of geometry.volumeOfRectangularPrism");
console.log(geometry.volumeOfRectangularPrism(30, 20, 10));
console.log(geometry.volumeOfRectangularPrism(5, 2, 3));
console.log(geometry.volumeOfRectangularPrism(1, 20, 10));
console.log(geometry.volumeOfRectangularPrism(15, 25, 35));
console.log(geometry.volumeOfRectangularPrism(1, 1.5, 2));
//console.log(geometry.volumeOfRectangularPrism(1, 2));
//console.log(geometry.volumeOfRectangularPrism(1, 1.5, -1));

console.log("\ntest of geometry.surfaceAreaOfRectangularPrism");
console.log(geometry.surfaceAreaOfRectangularPrism(30, 20, 10));
console.log(geometry.surfaceAreaOfRectangularPrism(5, 2, 3));
console.log(geometry.surfaceAreaOfRectangularPrism(1, 20, 10));
console.log(geometry.surfaceAreaOfRectangularPrism(15, 25, 35));
console.log(geometry.surfaceAreaOfRectangularPrism(1, 1.5, 2));
//console.log(geometry.surfaceAreaOfRectangularPrism(-1, 2, 3));
//console.log(geometry.surfaceAreaOfRectangularPrism(1, 2));

console.log("\ntest of geometry.volumeOfSphere");
console.log(geometry.volumeOfSphere(1));
console.log(geometry.volumeOfSphere(1.5));
console.log(geometry.volumeOfSphere(2));
console.log(geometry.volumeOfSphere(3));
console.log(geometry.volumeOfSphere(4));
//console.log(geometry.volumeOfSphere(-1));
//console.log(geometry.volumeOfSphere());

console.log("\ntest of geometry.surfaceAreaOfSphere");
console.log(geometry.surfaceAreaOfSphere(1));
console.log(geometry.surfaceAreaOfSphere(1.5));
console.log(geometry.surfaceAreaOfSphere(2));
console.log(geometry.surfaceAreaOfSphere(3));
console.log(geometry.surfaceAreaOfSphere(4));
//console.log(geometry.surfaceAreaOfSphere(-1));
//console.log(geometry.surfaceAreaOfSphere());

console.log("\ntest of utilities.deepEquality");
console.log(utilities.deepEquality({"a":1,"b":2}, {"a":1,"b":2}));
console.log(utilities.deepEquality({"a":1,"b":2}, {"b":2,"a":1}));
console.log(utilities.deepEquality({"a":1,"b":2}, {"a":1,"b":3}));
console.log(utilities.deepEquality({"a":1,"b":2}, {"a":1,"d":2}));
console.log(utilities.deepEquality({"a":1,"b":2}, {"a":1}));
//console.log(utilities.deepEquality({"a":1,"b":2}));

console.log("\ntest of utilities.uniqueElements");
console.log(utilities.uniqueElements(['a', 'a', 'a', 'a']));
console.log(utilities.uniqueElements(['a', 'a', 'a', 'aaa']));
console.log(utilities.uniqueElements(['a', 'a', 'b', 'b', 1]));
console.log(utilities.uniqueElements(['a', 'a', 'b', 'b', 1, '']));
console.log(utilities.uniqueElements([]));
//console.log(utilities.uniqueElements('a'));
//console.log(utilities.uniqueElements());

console.log("\ntest of utilities.countOfEachCharacterInString");
console.log(utilities.countOfEachCharacterInString("Hello World!"));
console.log(utilities.countOfEachCharacterInString("First Name: Shangwei"));
console.log(utilities.countOfEachCharacterInString("Last Name: Shi"));
console.log(utilities.countOfEachCharacterInString("CWID: 10427100"));
console.log(utilities.countOfEachCharacterInString("Happy Java."));
//console.log(utilities.countOfEachCharacterInString(['H', 'e', 'l', 'l', 'o']));
//console.log(utilities.countOfEachCharacterInString());



