// Task 1: Creating Your First Function - The "Greet User" Function 👋
// Objective: You’re building a friendly web app that greets users by their name. The first task is to create a function that welcomes users.

// How to do it:
// Create a function named greetUser.
// This function should take one parameter: name (which represents the user's name).
// Return a greeting message: "Hello, <name>!".

function greetUser(){
    let user_name = prompt("Enter your name")
    return document.getElementById("name").innerText = "Hello! " + user_name;
}
greetUser();


// Task 2: Function with Multiple Parameters - Calculating the Sum ➕
// Objective: You’re building a calculator app, and you need to create a function that can calculate the sum of two numbers.

// How to do it:
// Create a function named calculateSum.
// The function should take two parameters: num1 and num2.
// Return the sum of num1 and num2.
// Example:

// Input: 5 and 3
// Output: 8

function calculateSum(){
    let num1 = 5;
    let num2 = 3;
    let sum = num1 + num2;
    return document.getElementById("sum").innerText = "5 + 3 = " +  sum;

}
calculateSum();

// ask 3: Returning Values from Functions - Multiply Numbers ✖️
// Objective: Now, you want to extend your calculator app by adding a multiplication feature. Let’s create a function to multiply two numbers.

// How to do it:
// Create a function named multiplyNumbers.
// The function should take two parameters: num1 and num2.
// Return the product of num1 and num2.
// Example:

// Input: 4 and 6
// Output: 24

function multiplyNumbers(){
    let num1 = 4;
    let num2 = 6;
    let multiply = num1 * num2;
    return document.getElementById("multiply").innerText = "4 x 6 = " +  multiply;

}
multiplyNumbers();

// Task 4: Function Without Parameters - Display Current Date 📅
// Objective: You want to show the current date on your app every time the user visits. Let’s create a function that does this.

// How to do it:
// Create a function called displayCurrentDate.
// The function does not require any parameters.
// Use the Date object in JavaScript to get today’s date and display it in the console.

function displayCurrentDate(){
   let date = new Date();
   console.log(`${date.toDateString()}`);
}
displayCurrentDate();

// Task 5: Function Expression - Square of a Number 🔲
// Objective: You want to create a quick and easy function that can calculate the square of a number. In this task, you’ll use a function expression.

// How to do it:
// Create a function expression assigned to a variable named squareNumber.
// The function should take one parameter: num and return the square of that number (i.e., num * num).
// Call the function with a sample number to see the result.
// Example:

// Input: 5
// Output: 25

let squareNumber = function(num){
   return document.getElementById("snum").innerText = "5 x 5 = " +  num * num;
}
squareNumber(5);

// Task 6: Anonymous Function - Button Click Event 👇
// Objective: You’ll now make your app interactive by handling a button click event. When a user clicks a button, you want to display a message. This task will help you understand anonymous functions.

// How to do it:
// Create an anonymous function that displays a message when the button is clicked.
// Use the addEventListener method to trigger the function on a button click.
// The message can be something like "Button Clicked!", but feel free to customize it!
// Example (in HTML + JS):

// A button on the webpage that calls an anonymous function to display a message when clicked.

let btnClick = document.getElementById("btnclick").addEventListener("click", function(e){
    alert("Butoon Clicked!")
})