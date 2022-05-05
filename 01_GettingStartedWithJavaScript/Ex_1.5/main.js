console.log("My name is Ljupco"); 

let lname = "Trajanovski"; //Global variable
let age = 23;
const height = 180;

function FirstName(firstname){ // start of block scope
  let fname = firstname;  //Local variable
/*
    This fucntion is concatinating two 
    strings with empty space between. 
    */
  console.log(fname + " " + lname);
}    // end of blog scope

function LastName(){
    /*
    This fuction is showing
    only the last name into 
    the console.
    */
  console.log(lname);
}

function bio() {
  let fname = "Ljupco";  //Local variable

  age++;
  // height++;
  console.log(fname + " " + lname + "- age:" + age + "- height:" + height);
}



FirstName("Ljupco"); // This line of code is calling the first funtion.
LastName(); // This line of code is calling the second funtion.

bio();
bio();
bio();