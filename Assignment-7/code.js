console.log(a); //prints -> undefined

var a = 20;

console.log(a); //prints -> 20;
console.log(b); // throws reference error. b is not defined.

a = undefined; // we can do this.

/**
 * undefined: it is a special value in java script. In memory creation phase all varibles are intialized with undefined(due to variable hoisting).
 * not defined: It is Different from undefined. When ever we try to access variables for which memory is not allocated will throw error message as not defined.
 * 
 * we will get undefined, when memory allocated some variable and accessing before its declaration. We will get not defined when we try to access variable which is not declared in the scope.
 * 
 * We can assign undefined to some varaible, but it is not a good practise. What is the purpose of declaring varible if we assign undefined value to that. 
 */