
var number;
function getNumber(num)
{
    
    var x = document.getElementById("inputField");

    x.value+=num;

    



  
    
}


function cln()
{  
    var x=document.getElementById("inputField");
    x.value="";

}

function calc()
{
     var x=document.getElementById("inputField");
     x.value=eval(x.value);
     
     
}