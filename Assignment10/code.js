// variable Shadowing in JavaScripts occurs when inner variable hides or overrides outer variable within the local scope.

var a = 1;
let b = 2;
const c =3;

{
    var a = 4;
    let b = 5;
    const c =6;
    console.log(a); // prints -> 4, This is due to inner variable shadows outer variable.
    console.log(b); // prints -> 5, This is due to inner variable shadows outer variable. 
    console.log(c); // prints -> 6, This is due to inner variable shadows outer variable.
}
console.log(a); // prints -> 4, as var is functional scopes, the above block declaration changes a value in global object
console.log(b); // prints -> 2, as let and const are block scoped, the block variables does not effct outer variables.
console.log(c); // prints -> 3
    
// There are some cases where we can not do shadowing

var i = 10;
let j = 11;
const k = 12;

{
    // var i = 10; // this is accpted
    // let j = 11; // this is acceted
    // const k = 12; // this is accpted
    // var j = 12; // this is not accepted
    // var k = 13; // this is not accepted
    // above 2 shadowing does not work, as we can not do shadowing of inner variables which can cross boundaries of scope.
    // block are also follows block scopes
    let i =14 // this is accepted, as boundary of i let variable does not cross boundaries.

}


// ======================= Notes =============================
//  What is Block? Block is a way grouping statements. We use this grouped staments to in a place where java script expects only one statement 
if(true) console.log("hi");
if(true) {
    console.log("hi");
    console.log("world")
}


// let and const are block scoped, and var are function scoped;

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); // printd -> 10, we can access var due to it is saved in global scope.
// console.log(b); // throws ReferenceError: b is not defined, as we can not access b. This is due to let and const will be saved in separate restricted scope "Block"
// console.log(c); // throws ReferenceError: c is not defined
// for every block new seperate block scope will be created.
// let and const varibles which are not defined inside of a function will stored in Script Scope, where as var saves in Global Scope