class cal {
 constructor (x1 , y2) {
     this.x1 =x1;
     this.y2 =y2;
}}
class opr   extends cal{
    get add (){return this.x1+this.y2}
    get sub (){return this.x1-this.y2}
    get multi (){return this.x1*this.y2}
    get div (){return this.x1/this.y2}
    get sqr (){return this.y2*this.y2}
    get pw (){return Math.pow (this.x1,this.y2)}
    get sqrt (){return Math.sqrt (this.x1,this.y2)}    
    get cbrt (){return Math.cbrt (this.x1,this.y2)}
    get perc (){return (this.x1/this.y2)*100}
    
} 

var ans = new opr(15,35)

console.log(` ****** SIMPLE CALCULATOR ******


ADDITION      : ${ans.add}
SUBRACTION    : ${ans.sub}
MULITPICATION : ${ans.multi}
DIVISION      : ${ans.div}
SQUARE        : ${ans.sqr}
POWER         : ${ans.pw}
SQARE ROOT    : ${ans.sqrt}
CUBE ROOT     : ${ans.cbrt}
PERCENTAGE    : ${ans.perc}
 
`)
 










