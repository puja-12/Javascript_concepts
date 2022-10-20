//if condition

if (new Date().getHours() < 18)
 {
    document.getElementById("demo").innerHTML = "Good day!";  //Display "Good day!" if the hour is less than 18:00:
  }


// else statement
const hour = new Date().getHours(); 
let greeting1;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;  //If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":


//else if Statement

const time = new Date().getHours();
let greeting2;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting2;