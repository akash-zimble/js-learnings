let car1 = {
    brand: "Honda",
    model: "City",
}
console.log("---------------Shallow Copy------------");
console.log("car1=> ", car1);
let car2 = car1;
console.log("car2=> ", car2);
console.log("-----------After Modification----------");
car2.model = "i10";
console.log("car1=> ", car1);
console.log("car2=> ", car2);
car1.model = "City";

console.log("----------------Deep Copy--------------");
console.log("car1=> ", car1);
let car3 = JSON.parse(JSON.stringify(car1));
console.log("car3=> ", car3);
console.log("-----------After Modification----------");
car3.model = "i10";
console.log("car1=> ", car1);
console.log("car3=> ", car3);


let arr1 = [1,2,3,4]
console.log("---------------Shallow Copy------------");
let arr2 = arr1;
console.log("arr1=> ", arr1);
console.log("arr2=> ", arr2);
console.log("-----------After Modification----------");
arr2[2] = 4;
console.log("arr1=> ", arr1);
console.log("arr2=> ", arr2);
arr1[2] = 3;

console.log("----------------Deep Copy--------------");
console.log("arr1=> ", arr1);
let arr3 = [...arr1];
console.log("arr3=> ", arr3);
console.log("-----------After Modification----------");
arr3[2] = 4;
console.log("arr1=> ", arr1);
console.log("arr3=> ", arr3);
