let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let evenNumbers = numbers.filter(n=> n%2==0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(n => n%2==1);
console.log(oddNumbers);

let multipleOf3 = numbers.filter(n => n%3==0);
console.log(multipleOf3);

let multipliedBy2 = numbers.map(n => n*2);
console.log(multipliedBy2);

let multipleOf3MultipliedBy2 = numbers.filter(n => n%3==0).map(n => n*2);
console.log(multipleOf3MultipliedBy2);


/**
 * In above code i have used higher-order functions like map and filter.
 * 
 * Higher-order function is a function that takes a function as argument.
 * 
 * In above code, am passing arrow functions to the map and filter higher order functions.
 * 
 * These higher order functions helps to write readable and maintainable and modular code.
 * (Readable because we are not focusing the repetitive stuff, you only focus on the logic part).
 * 
 * And we can create our own higher order functions for Arrays by defining Array.prototype.functionName
 * 
 */