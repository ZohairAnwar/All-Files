var readline = require ('readline')
var takeInput = readline.createInterface(process.stdin,process.stdout);


takeInput.question("Enter first value" , function(x){
takeInput.question("Enter second value" , function(y){

    var count = parseInt(x) + parseInt(y)

    console.log("The Addtion Of x+y is = " + count);

    takeInput.close()
})
})


var readline  = require ("readline")
var takeInput1 = readline.createInterface(process.stdin,process.stdout);

takeInput1.question("Enter First value = " , function(a){
takeInput1.question("Enter Second value = " , function(b){

    var count = parseInt(a) - parseInt(b)
   
    console.log("The Subraction of a-b = " + count);

    takeInput1.close()
})    
})

 var readline = require ('readline')
 var takeInput2 = readline.createInterface(process.stdin,process.stdout);


takeInput2.question("Enter First value = " , function(A){
    takeInput2.question("Enter Second value = " , function(B){
    
        var count = parseInt(A) * parseInt(B)
       
        console.log("The Multipilcation of A*B = " + count);
    
        takeInput2.close()
    })    
    })
    

var readline = require ('readline')
 var takeInput3 = readline.createInterface(process.stdin,process.stdout);


takeInput3.question("Enter First value = " , function(C){
    takeInput3.question("Enter Second value = " , function(D){
    
        var count = parseInt(C) / parseInt(D)
       
        console.log("The Division of C/D = " + count);
    
        takeInput3.close()
    })    
    })
    