<script>  
var x = 10;  
var y = 20;  
var z=x+y;  
document.write(z);  
</script>  



const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;

//local valriable
function abc(){  
    var x=10;//local variable  
    } 
     

////gloabal variable  
var data=200;
function a(){  
    document.writeln(data);  
    }  
    function b(){  
    document.writeln(data);  
    }  
    a();//calling JavaScript function  
    b();      