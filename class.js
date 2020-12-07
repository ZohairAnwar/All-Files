console.log("************** CV ****************");


class CV {
    constructor(name,lsname,mail,contact,addres,quali,exp){
    this._name = name;
    this._lsname = lsname;
    this._mail = mail;
    this._contact = contact;
    this._addres = addres;
    this._quali = quali;
    this._exp = exp;
 }
 set name(value){
     this._name = value;
 }

 get name() {
     return this._name;
 } 

 set lsname(value1) {
    this._lsname =value1;

 } 
 get lsname () {
    return this._lsname
 }
 
 

 get fullname() {
    console.log("FULL NAME");
    return this._name + "  "+this._lsname 
 }
 
 set mail (value2) {
     this._mail = value2
 }

 get mail () {
     return this._mail
 }
}


let  user = new CV ("Zohair" , "Anwar" , "zohair28@gmail.com");
console.log(user._name);
console.log(user._lsname);
console.log(user.fullname);
console.log(user._mail);