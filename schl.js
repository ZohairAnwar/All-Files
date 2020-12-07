console.log("School Management System");
console.log("========================");``
function Student(name,fathnme,cls,lstpssmrk,rollno) {
    this.name = name ;  
     this.fathnme = fathnme;
     this.cls = cls;
     this.lstpssmrk = lstpssmrk;
     this.rollno = rollno; 
    this.fullNameUsingArrow = function(){
        setTimeout(()=>{
 
            console.log( "\n", this.name ,"  "+ "\n",this.fathnme ,"   "+"\n",this.cls,"  "+"\n",this.lstpssmrk,"  "+"\n",this.rollno);
        },4000)
        }
 }
 
 const s1 = new  Student("Zohair Anwar    ","Anwar Moeed    ","10    ","50    ",'201501    ')
 s1.fullNameUsingArrow();
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 