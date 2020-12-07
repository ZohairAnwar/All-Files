function Student(rollno,firstname,lastname) {
   this.rollno = rollno;
    this.firstname = firstname;
    this.lastname = lastname;

   this.fullNameUsingAnonymous = function (){

    setTimeout(function(){

       console.log(this.firstname,"   "+this.lastname);  
   },3000)
   }
   this.fullNameUsingArrow = function(){
       setTimeout(()=>{

           console.log(this.firstname,"   "+this.lastname);
       },4000)
       }
}

const s1 = new  Student("101","Faisal" , "Kamran")
s1.fullNameUsingAnonymous();
s1.fullNameUsingArrow();























