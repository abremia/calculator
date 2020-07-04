var aftr =0 ;
var inpt = 0 ;
var str ;
var par = false ;


function addition (x,y){
    par = true ;
   return x+y ;
}
function multi(x,y){
    par = true ;
  return x*y ;
}
function substraction (x,y){
    par = true ;
    return x-y ;
}
function division (x,y){
    par=true ;
   return  x/y ;
}
function mod (x,y){
     par=true ;
    return x%y ;
    
}
function valueInput(container){
 var v =  container.innerHTML ;
 if(par){
    window.inp.value = 0;
    par = false ;
    if(window.inp.value==="0"){
        if(v==="."){window.inp.value += v ;}
        else{window.inp.value = v ; }
        }
     else {window.inp.value += v ; }
 }
 else{if(window.inp.value==="0"){
    if(v==="."){window.inp.value += v ;}
    else{window.inp.value = v ; }
    }
 else {window.inp.value += v ; }}


}

function clear(){
    window.inp.value = 1;

}
function retInput(){
inpt = parseFloat(window.inp.value);


}


function retInputAftr(){
aftr = parseFloat(window.inp.value);

}
function setvalue(container){
str = container.innerHTML ;

}
function result(){

    retInputAftr();
    


//(num1,num2)

switch(str){

    case "+" :window.inp.value = addition(inpt,aftr);
    break;
    case "-" : window.inp.value = substraction(inpt,aftr);
    break;
    case "x" :window.inp.value = multi(inpt,aftr);
    break;
    case "/" :window.inp.value = division(inpt,aftr);
    break;
    case "%" :window.inp.value =  mod(inpt,aftr);
    break ;
}
    
}

function toColor(color){

    window.inp.style.boxShadow = "4px 4px 4px "+color ;
   var tds = document.getElementsByTagName("TD") ;
   for(i=0; i<tds.length;i++){
     tds[i].style.border ="2px solid "+color;
     tds[i].onmouseover = function(){
         this.style.backgroundColor = color ;
     }

   }

}
function playNum(countainer){

    var inne = countainer.innerHTML;
    window.num.setAttribute("src", "numbers/" + inne + ".mp3");

    window.num.play(); 

}
//document.getElementById("mydiv").onmouseover = function() 
//{
//    this.style.backgroundColor = "blue";
//}
