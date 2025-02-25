var x = 10;
console.log(x); // prints -> 10

function a() {
    var i = 20;
    console.log(x); // prints -> 10
    b();
    function b() {
        console.log(x); // prints -> 10
        console.log(i); // prints -> 20
    }

}
a();

// console.log(i); // throws reference error




/**
 * Scope: scope of the variable, where the variable can be accessed.
 * 
 * Lexical means hierarchy
 * 
 * Lexical scope of a function defines which different variables can be accessed in that particular function.
 * 
 * Lexical Scope of function = local variables of that function + lexical scope of its parent function
 * 
 * In the above code:
 *      Lexical scope of function b = local storage of function b + lexical scope of function a
 *      Lexical scope of function a = local storage of function a + lexical scope of global execution context
 *      Lexical scope of global function = Global execution context's storage + null (As it does not have any parent).
 * 
 * By this hierarchy, a can access variables assigned in its function scope and its parent, which is the global execution context's variables.
 * Similarly, b can access variables assigned in its function scope and its parent, which is a function execution context's variables.
 * 
 * The process of looking for variables in its own scope and then moving up to parent scopes is called the scope chain.
 * 
 * That means JS searches variables from local scope → parent scope → global scope.
 * If not found anywhere, it throws ReferenceError.
 */
