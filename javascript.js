function display(p){
document.getElementById("result").value += p ;
}

function clearScreen(){
document.getElementById("result").value= "";
}

function calculate(){   document.getElementById("result").value=eval(document.getElementById("result").value);
   }