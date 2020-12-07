var fruits = ["Apple" , "Banana" , "Orange" , "strawbery" , "Mango"]
var removed = fruits.splice(2 , 0 ," Berry ");
console.log("After Adding 1 : " + fruits);
console.log("Removed : " + removed);

removed = fruits.splice(3 , 1 , "lemon");
console.log("After Adding 2 : " + fruits);
console.log("Removed : " + removed);



