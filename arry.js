var aarry = ["1","2","3"]

console.log(aarry[0,1,2]);
 
console.log("==================");

var alphas;
alphas = ["1","2","3","4"]
console.log(alphas[0]);
console.log(alphas[1]);
console.log(alphas[2]);
console.log(alphas[3]);

console.log("==============================");

var arr_names = new Array('Mary','Tom','Jack','Zack')
for(var i = 0;i<arr_names.length;i++) {
   console.log(arr_names[i]);
}

console.log ("=====================");


var alpha = ["a","b","c"];
var numeric = [1 ,2 ,3];
var aplhanumeric = alpha.concat(numeric);

console.log("Alpha Numeric :  " + aplhanumeric);

console.log("================================");



function isBigEnough(element, index, array) {
    return (element >= 9)
}

var passed = [14, 45, 262, 310, 98 ].every(isBigEnough);
console.log("Test Value : " + passed );



function isBigEnough1(element, index, array) {
    return (element >= 10)
}

var second = [12, 4, 56, 7, 9].every(isBigEnough1);
console.log("Test Value 1 : " + second );



console.log("===================================");

function isBigEnough(elemnt, index, array) {
    return (elemnt >= 4);
}
var passed = [12, 34, 6, 1, 15].filter(isBigEnough);
console.log("Test Value : " + passed );

console.log("=====================================");


var Lcd = new Array ()
 Lcd.push(39);
console.log("Number Of LCD : " + Lcd);

var cpu = new Array ()
cpu.push(39);
console.log("Numbers Of CPU : " + cpu);

var keyamou = new Array ()
 keyamou.push(39,39);
console.log("Number Of Keyboard And Mouse : " + keyamou);

var AC = new Array ()
 AC.push(4)
console.log("Numbers OF AC : " + AC);

var laptops = new Array ()
 laptops.push(3)
console.log("Numbers Of Laptops : " + laptops );


var teachers = new Array ()
teachers.push(2)
console.log("Numbers Of Teachers : " + teachers);

console.log("===============================================");