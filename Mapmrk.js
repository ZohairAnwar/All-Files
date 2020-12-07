function marksheet(value,key){
    console.log("["  + key  + "] = "," " + value,);
}

console.log("-------------------MARK SHEET-------------------");

var mymrksht = new Map ()


mymrksht.set ("name","Zohair Anwar");
mymrksht.set ("class","12");
mymrksht.set ("Enrollment NO","SSUET/3619/2020");
mymrksht.set ("Roll No","4510");



mymrksht.set ("SUBJECTS" ,      "MARKS")
mymrksht.set ('PHYSICS',          "89");
mymrksht.set ("MATHS",            "91");
mymrksht.set ("CHEMISTRY",        "78");
mymrksht.set ("URDU",             '65');
mymrksht.set ("ENGLISH",          "88");
mymrksht.set ("PASKITAN STUDIES", "70");

mymrksht.forEach(marksheet)


