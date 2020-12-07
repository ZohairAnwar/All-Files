console.log("\n","*************** SCHOOL MANAGEMENT SYSTEM ****************","\n");
 class scms {
    constructor (name,lstname,rollno,enroll,clas,lstclas,pssmrks,addf,montf,extf,gamf,eng,phy,chem) {
        this.name = name;
        this.lstname = lstname;
        this.rollno = rollno;
        this.enroll = enroll;
        this.clas = clas;
        this.lstclas = lstclas;
        this.pssmrks = pssmrks;
        this.addf = addf;
        this.montf = montf;
        this.extf = extf;
        this.gamf = gamf;
        this.eng = eng;
        this.phy = phy;
        this.chem = chem;

     
    }   }


class data extends scms {
     info() {
         console.log("NAME           : "+this.name);
         console.log("FATHERNAME     : "+this.lstname);
         console.log("ROLL NO        : "+this.rollno);
         console.log("ENROLLMENT NO  : "+this.enroll);
         console.log("PRESENT CLASS  : "+this.clas);
         console.log("PREVIOUS CLASS : "+this.lstclas);
         console.log("PASSING MARKS  : "+this.pssmrks);
          }
} 

var obj = new data("Zohair Anwar","Anwar Moeed",20151,"SSUET/45870/2020",12,11,"989/1200" );
obj.info()
 console.log("\n","************************ FEES VOUCHER ******************",'\n');


  class fees extends scms {
      fee() {
          console.log("ADDMISION FEES    : "+this.addf);
          console.log("MONTHLY FEES      : "+this.montf);
          console.log("EXTRACIRCULM FEES : "+this.extf);
          console.log("GAME FEES         : "+this.gamf);

      } 
  }

 var obj1 = new fees ("Zohair Anwar","Anwar Moeed",20151,"SSUET/45870/2020",12,11,"989/1200",55000,5000,2800,1450);
//  console.log(obj.fee());
 obj1.fee()  


 console.log("\n","***************** MARK SHEET ******************","\n");


    class marks extends scms {
        mrks() {
            console.log("ENGLISH   : "+this.eng,"  "+this.cal(this.eng));
            console.log("PHYSICS   : "+this.phy,"  "+this.cal(this.phy));
            console.log("CHEMISTRY : "+this.chem,"  "+this.cal(this.chem));

        }
      cal(val) {
        return (val>50)? "Pass" : "Fail"
    }
    }

    var obj2 = new marks ("Zohair Anwar","Anwar Moeed",20151,"SSUET/45870/2020",12,11,"989/1200",55000,5000,2800,1450,75,85,40);

    obj2.mrks()
    // console.log(obj2.cal());
    