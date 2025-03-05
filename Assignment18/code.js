let arr = [1,2,3,4,5,6,7,8,9,10];

function add2(n){
    return n+2;
}

let resultForAdd2 =  arr.map(add2);
/**
 * map iterates to the array and maps the value based on the call function we give
 * map() does not change given array
 */
console.log(arr); 
console.log(resultForAdd2);

let evenNumbers = arr.filter(x=> x%2==0);

console.log(evenNumbers);
/**
 * filter() function iterates through arr and filter out the entries based on the condition we give in call back function
 */

let result = arr.reduce((a, c) => {
    if (c > a.firstMax) {
        a.secondMax = a.firstMax;
        a.firstMax = c;
    } else if (c > a.secondMax && c < a.firstMax) {
        a.secondMax = c;
    }
    return a;
}, {firstMax: -Infinity, secondMax: -Infinity});

console.log(result);