console.log("\n","Welcome To ATM Machine","\n");
var readline = require ('readline')
var takeInput = readline.createInterface(process.stdin,process.stdout);
var totlbal = 300000
function atm() {
    console.log(" Choose Option ");
    console.log("********************************","\n","1:Cash Withdraw","\n","2:Availbale Balance","\n","3:Fast Cash","\n","4:Online Transaction");
    takeInput.question("Select From Given Option",function(name){
        if(name == 1){
            console.log("\n"," Cash Withdraw Selected");
            takeInput.question("Enter Amount : " , function(a){

                var b = parseInt(a)
                rb = totlbal - b
                console.log("\n","Completed");
                console.log("Remaning Balance Is : ",rb);
                countbrk()})}
                else if(name == 2){
                    console.log("\n","Available Balance");
                    console.log("------------------------------");
                    console.log("\n","Your Avaiable Balance Is = " ,rb);
            countbrk()} 
else if(name == "3"){
    console.log("\n","Fast Cash");
    console.log("---------------------------------");
    console.log('1:5000',"2:10000","3:15000");
    takeInput.question("Select Your Option",function(Amount){
        if(Amount == "1"){
            console.log("\n","5000 Have Been Selected ");
            totlbal = totlbal - 5000
            console.log("\n"," Your Remaning Balance Is = ",totlbal);
        countbrk()}
        else if (Amount == "2"){
            console.log('\n','10000 Have Been Selected');
            totlbal = totlbal - 10000
            console.log("\n",'Your Remaning Balance Is = ',totlbal);
        countbrk()}
        else if(amount == "3"){
            console.log("\n","20000 Have Been Selected ");
            totlbal = totlbal - 20000
            console.log("\n","Your Remaning Balance Is = ",totlbal);
        countbrk()}
        else{
            console.log("Choose Correct Option");
            atm()}})}
            else if(name == 4){
             console.log("\n","Online Transaction");  
             console.log("------------------------------");
             takeInput.question("Enter Your Account Number : " ,function(auntnum){
                 if (auntnum.length == 12 ){
                      takeInput.question("Enter Amount : ",function(auntnum){
                 totlbal = totlbal - parseInt(auntnum)
                 console.log("Transfer Completed");
                 console.log("\n","Your Remaning Balance Is :",totlbal);
             countbrk()
            })}
            else { 
                console.log("Wrong Option");
                atm()}})}})}
function countbrk(){
    takeInput.question("\n Do You Want To Continue Y/N :",function(choice){
        var ch = choice.toLowercase()
        if (ch == "y"){
            atm()
        }
        else if (ch == "n"){
            console.log("Thank You");
            takeInput.close
         }
        else{
            console.log("ERROR");
         }
     })
}
atm()
            