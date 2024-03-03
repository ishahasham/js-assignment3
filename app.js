// USER INPUT AND CONDITIONAL STATEMENT 

// CHAPTER 9-11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city=prompt("ENTER CITY NAME:");
if(city==="karachi"){
    alert("Welcome to city of Lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender=prompt("ENTER YOUR GENDER:")
if(gender==="male"||gender==="female"){
    alert("Good Morning Sir.")
}
else{
    alert("Good Morning Ma'am.")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var color=prompt("ENTER COLOR NAME:")
if(color==="red"){
    alert("Must Stop");
}
else if(color==="yellow"){
    alert("Ready to move")
}
else if(color==="green"){
    alert("Move now")
}
    
// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

var fuel=+prompt("ENTER FUEL VALUE:")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// output= alert string 

// b.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// output= alert string 

// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// output alert sting


// e. 
if (true){
alert("True");
}
if (false){
alert("False")
}
// output true

// f. 
if("car" < "cat"){
    alert("car is smaller than cat");
}
// output alert string

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
var linebreak="<br>";
var perc=+prompt("Enter Total Number:");
var totalMarks=300;
var total=perc*100/totalMarks;
if(total>=80&&total<100){
    remarks="Excellent"
    grade="A-ONE"
    document.write("<h1>Marks Sheet:</h1>"+"<br>"+"Total marks:"+totalMarks+linebreak+"Marks obtained:"+perc+linebreak+"Percentage "+total+linebreak+"Grade:"+grade+linebreak+"Remarks: "+remarks);
}
else if(total>=70&&total<80){
    remarks="Good"
    grade="A"
    document.write("<h1>Marks Sheet:</h1>"+"<br>"+"Total marks:"+totalMarks+linebreak+"Marks obtained:"+perc+linebreak+"Percentage "+total+linebreak+"Grade:"+grade+linebreak+"Remarks: "+remarks);

}
else if(total>=60&&total<70){
    remarks="You need to improve"
    grade="B"
    document.write("<h1>Marks Sheet:</h1>"+"<br>"+"Total marks:"+totalMarks+linebreak+"Marks obtained:"+perc+linebreak+"Percentage "+total+linebreak+"Grade:"+grade+linebreak+"Remarks: "+remarks);

}
else{
    remarks="Sorry"
    grade="Fail"
    document.write("<h1>Marks Sheet:</h1>"+"<br>"+"Total marks:"+totalMarks+linebreak+"Marks obtained:"+perc+linebreak+"Percentage "+total+linebreak+"Grade:"+grade+linebreak+"Remarks: "+remarks);
}

// 7. Guess game:
var secretNumber=+prompt("Enter Number:");
if(secretNumber===6){
    alert("Bingo! Correct Answer!")
}
else{
    alert("Close enough to the correct answer")
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var value=+prompt("Enter a number:")
if(value%3===0){
    alert("Number is divisible by 3")
}
else{
    alert("Number is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var value=+prompt("Enter a number:")
if(value%2===0){
    alert("Its an even number")
}
else{
    alert("Its an odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
var t=+prompt("Enter temperature value:")
if(t>40){
    alert("It is too hot outside")
}
else if(t>30){
    alert("The weather today is normal")
}
else if(t>20){
    alert("Today's Weather is cool")
}
else if(t>10){
    alert("OMG! Today's weather is so cool")
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
var first=prompt("First Number:")
var second=prompt("Second Number:")
var operation=prompt("Enter a operation(+,-,*,/,%)");
var result;
if(operation=='+'){
   result=first+second
}
else if(operation=='-'){
    result=first-second
}
else if(operation=='*'){
    result=first*second
}
else if(operation=='/'){
    result=first/second
}
else if(operation=='%'){
    result=first%second
}
else{
    console.log("Invalid operation")
}
console.log("the result is: "+result)

// Chapter 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// in ascii code 0=48,9=57
var character=prompt("Enter a character:")
if(character>=48 && character<=57){
    alert("The character is Number")
}
else if (character>=65 && character<=90) {
    alert("The character is an uppercase letter")
}
else if (character>= 97 && character<= 122) {
    alert("The character is a lowercase letter");
} 
else {
    alert("Nothing");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1=prompt("Enter the first integar:");
var num2=prompt("Enter the second integar");
if(num1>num2){
    alert("The larger number is "+num1);
}
else if(num2>num1){
    alert("The larger number is "+num2);
}
else{
    alert("both are equal")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var input=prompt("Enter a Number")
if(input>0){
    console.log("Number is postive")
}
else if(input<0){
    console.log("Number is negative")
}
else{
    console.log("Number is zero")
}

// 4. Write a program that takes a character (i.e. string of
//  length 1) and returns true if it is a vowel, false otherwise

var character1=prompt("enter a character");
if(character1=='a'){
    console.log("true")
}
else if(character1=='e'){
    console.log("true")
}
else if(character1=='o'){
    console.log("true")
}
else if(character1=='i'){
    console.log("true")
}
else if(character1=='u'){
    console.log("true")
}
else{
    console.log("false")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var js="hello12345";
var input1=prompt("enter password")
if(input1===js){
    console.log("Correct! thThe password you entered matches the original password")
}
else if(input1===""){
    console.log("Enter your password")
}
else{
    console.log("Incorrect Password")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
console.log(greeting)

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time=prompt("Enter the time:");
// var time1;
// if (time >= 0 && time <= 2359) {
//     if (time === 0) {
//         time1 = "12am";
//     } 
//     else if (time < 1200) {
//         time1 = time + "am";
//     } 
//     else if (time === 1200) {
//         time1 = "12pm";
//     } 
//     else {
//         time1= (time - 1200) + "pm";
//     }
//     console.log("the time is: ",time1)
// } 
// else {
//     console.log("Invalid input for time");
// }

// Chap 10
// 1. var city ="Karachi" if (city = "Karachi") { console.log(&quot;The City
//     OF Lights&quot;) Correct the above statement:
//     Also try this statement by yourself

// correct statement is 
// if (city==="Karachi")


// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
if (x === y){
    var z=prompt("Enter the value of z:")
}

// 3. Code an if statement that tests if ZipCode is &quot;10010&quot; so, Alert
// that &quot;Karachi&quot;. if not then alert (&quot;Please write correct city&quot;)
var place=10010;
var zipcode=prompt("Enter zip code")
if(zipcode===place){
    alert("Karachi")
}
else{
    alert("Please write correct city")
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
var variable=1;
if(variable===newVariable){
    variable=newVariable
}

// chap 11
// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)
if(variable !== variable2){}

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
if(variable1>=variable2){}

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
if (variable1 !== number) {
    variable1 = newNumber;
}

// 4. Code an if statement that tests whether a number is unequal
// to a different number. If the condition is true (it will be),
// display a congratulations alert.
if(number!==newNumber){
    alert("Congratulations")
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says &quot;No
// match&quot;

// JavaScript code for a prompt asking for your first name and an if statement to test if the name is unequal to another name

var first_Name = prompt("Enter your first name:");
if (first_Name !== "Isha") {
    alert("No match");
}

// chap 12

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.
// JavaScript code for an if statement testing if a variable is greater than or equal to another variable and displaying different alerts based on the condition

if (variable1 >= variable2) {
    alert("Alert");
} 
else {
    alert("diffrent alert");
}

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert(&quot;a is 10&quot;);
// }
// If a isn&#39;t 10, display an alert that says The correct value of a is

if(a===10){
    alert("a is 10")
}
else{
    alert("the correct value of a is 10")
}

// chap 13

// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.
if(a===b && c===d){}

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn&#39;t have the
// same value as d.
if(a===b || c!==d){}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
var number1=4;
var number2=9;
if(number1<number2 || number1>number2){
    alert("alert")
}

// chap 14 

// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says &quot;Password must be greater than 5&quot; if greater
// than 5 then Alert OK.
var password1=prompt("enter your password")
if(password1!==""){
    if(password1<=5){
        alert("Password must be greater than 5")
    }
    else{
        alert("OK")
    }
}
else{
    alert("please enter your password")
}


// 2. Try this statement by yourself if (a === 1) { if (c === &quot;Max&quot;) {
//     alert(&quot;OK&quot;);
//     }
//     }
if(a===1){
    if(c==="Max"){
        alert("OK")
    }
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) { if (c
// === &quot;Max&quot;) {
// alert(&quot;OK&quot;);
// }
// }
if(a===1 && c==="marks"){
    alert("OK")
}

// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.

var num_1=6;
var num_2=6;
if(num_1===num_2){
    if(num_1<=num_2){
        alert("alert message")
    }
}