var a = 5;
var b = 4;

function sum(a,b){
    var result = a + b;
    return result;
}

let sum1 = sum(4,5);
let sum2 = sum(6,7);

console.log(sum1);
/**
 * First, the Global Execution Context (GEC) is created in memory.
 * 
 * Code execution has 2 parts:
 * 1. Memory Allocation
 * 2. Code Execution
 * 
 * During memory allocation, memory is allocated for variables and assigned the value `undefined`. For functions, the entire function code is stored in memory.
 * Then, the code is executed line by line. During this phase, the variables are assigned the values specified in the code.
 * Whenever a function is invoked, a new Execution Context (EC) is created, and control is transferred to that Execution Context. After the function finishes executing, control is returned to the Execution Context that invoked the function.
 * 
 * Function invocations are managed using a "Call Stack". First, the GEC is pushed onto the Call Stack. Whenever the GEC invokes a function, the EC of that function is pushed onto the Call Stack. Once the function execution finishes, it is removed from the Call Stack.
 */
