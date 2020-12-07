 console.log("\n","************************* SCHOOL MANAGEMENT SYSTEM *************************","\n");


var schms = [
    {id: 01 , name: "Zohair", lsname: "Anwar ",rollno:   20150 , class: 10 },
    {id: 02 , name: "Moiz  " , lsname: "Ali   " , rollno:  20151 , class: 10 },
    {id: 03 , name: "Kamran" , lsname: "Khan  " , rollno:  20152 , class: 10 },
    {id: 04 , name: "Gul   " , lsname: "Hassan" , rollno:  20153 , class: 9 },
    {id: 05 , name: "Maaz  " , lsname: "Khan  " , rollno:  20154 , class: 9 },
]
// var info = schms.map(function(schms){

//    return console.log(schms.id,schms.name,schms.lsname,schms.rollno,schms.class,"\n")

// });


var readline = require("readline")
var takeinput = readline.createInterface(process.stdin,process.stdout);
var a = takeinput.question('Please Enter Name ', function(name){
//   var b  = parseInt(name)

 schms.map(function(val){
     if(val.name.trim() === name.trim( )) {
         console.log(val);
         
     }
     
 })
 takeinput.close();
})

