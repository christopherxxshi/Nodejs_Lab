const geometry = require('./geometry');
const utilities = require('./utilities');

console.log("Testing geometry.volumeOfRectangularPrism");
try{
    console.log(geometry.volumeOfRectangularPrism(30, 20, 10)); //6000
    console.log(geometry.volumeOfRectangularPrism(5, 2, 3)); // 30
    console.log(geometry.volumeOfRectangularPrism(1, 20, 2.5)); // 50
    console.log(geometry.volumeOfRectangularPrism(1, 2)); // error
}catch(err){
    console.log(err);
}
try{
    console.log(geometry.volumeOfRectangularPrism(1, -1.5, 1)); // error
}catch(err){
    console.log(err);
}

console.log("\nTesting geometry.surfaceAreaOfRectangularPrism");
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1, 2, 2)); // 16
    console.log(geometry.surfaceAreaOfRectangularPrism(5, 2, 3)); // 62
    console.log(geometry.surfaceAreaOfRectangularPrism(1.5, 2, 10)); // 76
    console.log(geometry.surfaceAreaOfRectangularPrism(-1, 2, 3)); // error
}catch(err){
    console.log(err);
}
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1, 2)); // error
}catch(err){
    console.log(err);
}

console.log("\nTesting geometry.volumeOfSphere");
try{
    console.log(geometry.volumeOfSphere(1)); // 4.188
    console.log(geometry.volumeOfSphere(1.5)); // 14.137
    console.log(geometry.volumeOfSphere(2)); // 33.510
    console.log(geometry.volumeOfSphere(-1)); // error
}catch(err){
    console.log(err);
}
try{
    console.log(geometry.volumeOfSphere()); // error
}catch(err){
    console.log(err);
}

console.log("\nTesting geometry.surfaceAreaOfSphere");
try{
    console.log(geometry.surfaceAreaOfSphere(1)); // 12.566
    console.log(geometry.surfaceAreaOfSphere(1.5)); // 28.274
    console.log(geometry.surfaceAreaOfSphere(2)); // 50.265
    console.log(geometry.surfaceAreaOfSphere(-1)); // error
}catch(err){
    console.log(err);
}
try{
    console.log(geometry.surfaceAreaOfSphere()); // error
}catch(err){
    console.log(err);
}


console.log("\nTesting utilities.deepEquality");
try{
    test1a = {
        "a":1,
        "b":2
    };
    test1b = {
        "a":1,
        "b":2
    };
    console.log(utilities.deepEquality(test1a, test1b));//true
    test2a = test1a;
    test2b = {
        "a":1,
        "b":3
    };
    console.log(utilities.deepEquality(test2a, test2b));//false
    test3a = test1a;
    test3b = {
        "b":2,
        "a":1
    };
    console.log(utilities.deepEquality(test3a, test3b));//true
    test4a = {
        "a":1,
        "b":{
            1:"a",
            2:"b"
        }
    };
    test4b = {
        "a":1,
        "b":{
            1:"a",
            2:"b"
        }
    };
    console.log(utilities.deepEquality(test4a, test4b));//true
    test5a = test1a;
    console.log(utilities.deepEquality(test5a));//error
}catch(err){
    console.log(err);
}

console.log("\nTesting utilities.uniqueElements");
try{
    console.log(utilities.uniqueElements(['a', 'a', 'a', 'a'])); //1
    console.log(utilities.uniqueElements([])); //0
    console.log(utilities.uniqueElements(['a', 'a', 'b', 'd', 1])); //4
    console.log(utilities.uniqueElements(['a', 'a', 'b', 'b', 1, ''])); //4
    console.log(utilities.uniqueElements('a')); //error
}catch(err){
    console.log(err);
}

console.log("\nTesting utilities.countOfEachCharacterInString");
try{
    console.log(utilities.countOfEachCharacterInString("Hello, the pie is in the oven"));
    console.log(utilities.countOfEachCharacterInString("First Name: Shangwei"));
    console.log(utilities.countOfEachCharacterInString("Last Name: Shi"));
    console.log(utilities.countOfEachCharacterInString("CWID: 10427100"));
    console.log(utilities.countOfEachCharacterInString(['H', 'e', 'l', 'l', 'o'])); //error
}catch(err){
    console.log(err);
}


