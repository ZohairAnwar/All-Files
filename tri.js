console.log("=============TRIANGLE '1'===========");

var stars = "********"

for(let j=8 ; j>0 ; j-- ){
    stars = stars.replace('*',' ')
    console.log(stars);
}

console.log("=============TRIANGLE '2'================");

var stars = "********"

for(let j=1 ; j<8 ; j++ ){
    stars = stars.replace('*','')
    console.log(stars);
}


console.log("==============DIAMOND==============");

var stars = '* '
var num = 6

for(let j=0; j<6 ; j++){
     var spc = ""
  for(let i=0 ; i<num ; i++){
  spc = spc + " "
  }
  
  var c = spc + stars
  console.log(c)
  num = num -1
  stars = stars + "* "

    
}
var stars = " * * * * * * "
var num = 6
for(let j=6; j>0 ; j--){
    var spc = " "
    stars = stars.replace('* ',' ')
    
    console.log(stars);
    

}