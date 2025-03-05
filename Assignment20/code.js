/**
 * Currying is a functional programming technique, that used to transform a function with multiple arguments to series of nested funcitons- each takes single argument,
 * Ex fun(a,b,c) can be transformed into fn(a)(b)(c)
 * 
 * This can be achieved by 2 ways
 *  1) Using the closures function
 *  2) Using bind
 */


function multiplyThreeArguments(a,b,c) {
    return a*b*c;
}
console.log(multiplyThreeArguments(2,3,5));

// Using closures
function multiplyThreeArgumentsWithClosureCurryFunction(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(multiplyThreeArgumentsWithClosureCurryFunction(2)(3)(5))

/**
 * Using bind()
 */

let multiplyBy2 = multiplyThreeArguments.bind(null,2);
let multiplyBy2And3 = multiplyBy2.bind(null,3);
console.log(multiplyBy2And3(5));
console.log(multiplyBy2And3(6));

/**
 * Advantages: 
 *      Argument Presetting: If you have common argument for multiple you can preset  those arguments. line number 31 and 32
 *      Flexibility in function calls: you can chain function calls as pipeline.
 * 
 * Currying functions remove repetitive code, rather the using multiply(2,3,5), multiply(2,3,6) you can do multiplyBy2And3(5) multiplyBy2And3(6)
 */