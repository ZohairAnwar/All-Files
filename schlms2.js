// "---------------------- MODULE 1 ----------------------------"

class schlms {
    constructor(name,fthname,clas,lsclas,lspsmrk,rlln,addf,monf,exf,gmf,eng,phy){
        this._name = name;
        this.fthname = fthname;
        this.clas = clas;
        this.lsclas = lsclas;
        this.lspsmrk = lspsmrk;
        this.rlln = rlln;
        this.addf = addf;
        this.monf = monf;
        this.exf = exf;
        this.gmf = gmf;
        this.eng = eng;
        this.phy = phy;
    }

     set _name(value) { this.name = value};    
     get _name () {return this.name}


    set _fthname(value) {this.fthname = value}
    get _fthname(){return this.fthname}

   
    set _clas(value) {this.clas = value}
    get _clas() {return this.clas}

    set _lsclas(value) {this.lsclas = vlaue}
    get _lsclas() {return this.lsclas}

    set _lspsmrk(value) {this.lspsmrk = value}
    get _lspsmrk() {return this.lspsmrk}

    set _rlln(value) {this.rlln = vlaue}
    get _rlln() {return this.rlln}

    set _addf(value) {this.addf = value}
    get _addf() {return this.addf}

    set _monf(value) {this.monf = value}
    get _monf() {return this.monf}

    set _exf(value) {this.exf = value}
    get _exf() {return this.exf}

    set _gmf(value) {this.gmf = value}
    get _gmf() {return this.gmf}

    
    set _eng(value) {this.eng = value}
    get _eng() {return this.eng}

    
    set _phy(value) {this.phy = value}
    get _phy() {return this.phy}

    con(a){

if (a > 50) {
    return('Pass');
}
else{
    return('Fail');
}
}

}


console.log("***********SCHOOL MANAGEMENT SYSTEM****************","\n");


var schlm = new schlms ("ZOHAIR ANWAR" , "ANWAR MOEED" , 10 ,  9 , '850/1000' , 20151 ,540000,5000,2500,1500,80,45);
console.log("NAME               :" , schlm.name);
console.log("FATHERNAME         :" , schlm.fthname);
console.log("ROLL NO            :" , schlm.rlln);
console.log("CLASS              : " ,schlm.clas);
console.log("PREVIOUS CLASS     :" , schlm.lsclas);
console.log("LAST PASSING MARKS :" , schlm.lspsmrk);


// "-------------------- MODULE 2 -------------------------"

console.log("\n","---------------FEES STRUCTURE--------------","\n" );


console.log("ADDMISION FEES      :" , schlm.addf);
console.log("MONTHLY FEES        :" , schlm.monf);
console.log("EXTRACALICULAR FEES :" , schlm.exf);
console.log("GAME FEES           :" , schlm.gmf);

// "------------------- MODULE 3 --------------------------"

console.log("\n","-------------MARK SHEET-----------------","\n");


console.log("SUBJECT","   ","MARKS","  ","STATUS","\n");
console.log("ENGLISH :" ,"  ", schlm.eng,"    ",schlm.con(80));
console.log("PHYSICS :" ,"  ",schlm.phy,"    ",schlm.con(45));




