function Tax (sal,per=10) {
    return((sal*per)/100)
} 

var salary =  320000
var salary1 = 4309000
var salary2 = 543000
var salary3 = 15000 
var percent1 = 25   
var percent2 = 35
var percent3 = 15
var tax = Tax(  salary)
var tax1 = Tax(salary1,percent1)
var tax2 = Tax(salary2,percent2)
var tax3 = Tax(salary3,percent3)

console.log("       Tax Calculation:      ");
console.log("---------------------------------");

console.log("Salary is: ",salary );
console.log("tax 10%: ", tax);

console.log("Salary1 is:",salary1);
console.log("tax 25%:",tax1);


console.log( "Salary2 is:",salary2);
console.log('tax 35%:',tax2);


console.log("Saalry is;",salary3);
console.log("tax 15%:",tax3);



















