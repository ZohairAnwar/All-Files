
console.log("----------------CV-------------------");

var myCv  = new Map ()

myCv.set ("name" , "Zohair Anwar");
myCv.set ("lsname" , "Anwar Moeed");
myCv.set ("Mail" , "zohairanwar28@gmail.com");
myCv.set ("contact" , "0315-3160998");
myCv.set ("Addres" , "Bufferzone");

console.log("Name        :",myCv.get("name"));
console.log("Father Name :",myCv.get("lsname"));
console.log("Email       :",myCv.get("Mail"));
console.log("PH-NO       :",myCv.get("contact"));
console.log("Address     :",myCv.get("Addres"));


function CV(value,key) {
    console.log("["  + key + "] = " + value);
}


console.log("----------------CV-------------------");

var myCv  = new Map ()

myCv.set ("name" , "Zohair Anwar");
myCv.set ("lsname" , "Anwar Moeed");
myCv.set ("Mail" , "zohairanwar@gmail.com");
myCv.set ("contact" , "0315-1234567");
myCv.set ("Addres" , "Bufferzone");

myCv.forEach(CV)