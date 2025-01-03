// --------------------------------------------- pro 1 ------------------------------------------------ 
document.write("<h1><u>Grade Analyzer</u></h1>");
let student_name = "Kiara";
let mark = 80;

//define condition for mark first check if its not so else if and so on...
if(mark >= 90 && mark <= 99){
    document.write("<h3>Student Name: " + student_name + "<br>Mark: " + mark + "<br> Top Futuristic Student </h3>")
}
else if(mark >= 70 && mark <= 89){
    document.write("<h3>Student Name: " + student_name + "<br>Mark: " + mark + "<br> Almost There! </h3>")
}
else if(mark >= 50 && mark <= 69){
    document.write("<h3>Student Name: " + student_name + "<br>Mark: " + mark + "<br> Keep Working Hard! </h3>")
}
else if(mark >= 50 && mark <= 69){
    document.write("<h3>Student Name: " + student_name + "<br>Mark: " + mark + "<br> Back to Basics! </h3>")
}

if(mark % 5 == 0 && mark % 10 == 0){
    document.write( "<h3>Elite Performer </h3>" )
}

// ----------------------------------------------- pro 2 ------------------------------------------------------ 

document.write("<h1><u>Expense Balancer</u></h1>");
let monthly_income = 20000;
let food = 4000;
let Transport = 2000;
let Gadgets = 8000;
let total_expenses = food + Transport + Gadgets;

//define condition for mark first check if its not so else if and so on...
if(total_expenses > monthly_income){
    document.write("<h3>Monthly Income: " + monthly_income + "<br>Total Expenses: " +  total_expenses + "<br>System Warning: Bankrupt in Future!</h3>");
}
else if(total_expenses < monthly_income){
    document.write("<h3>Monthly Income: " + monthly_income + "<br>Total Expenses: " +  total_expenses + "<br>Future Secure!</h3>");
}
else if(total_expenses == monthly_income){
    document.write("<h3>Monthly Income: " + monthly_income + "<br>Total Expenses: " +  total_expenses + "<br>Zero Savings: Future Risky!</h3>");
}

// ---------------------------------------------- pro 3 -----------------------------------------------------------

document.write("<h1><u>Futuristic Password Validator</u></h1>");

let password = "Dishu03!"; // corrected password
let lowerCaseLetters = /[a-z]/g;//use here g mits global search for check the string
let upperCaseLetters = /[A-Z]/g;
let hasDigit = /\d/g;
let numbers = /[0-9]/g;
let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g;

document.write("<h3>Enter a password: " + password)

//define condition for mark first check if its not so else and so on...
if(password.length == 8 && lowerCaseLetters && upperCaseLetters && hasDigit && numbers && hasSpecialChar){
    document.write("<h3>password accepted!</h3>");
}else{
    document.write("<h3>Futuristic Security Breach!</h3>");
}

//------------------------------------------------ pro 4 -----------------------------------------------------------

document.write("<h1><u>Logical Number Sorter</u></h1>");

const num = [3, 36, 1, 5 , 16]
let size = num.length;

document.write("<h3>Original Array is: </h3>");
//create a original array loop for display element
for( i = 0; i < size; i++){
    document.write("<h3>" + num[i] + "  </h3>" );
}

//create a cube and sqrt element loop
for(i = 0; i < size; i++){
    if(num[i] % 2 == 1){//if odd
        let cube = num[i] * num[i] * num[i];
        document.write("<h3>" + num[i] + " cube is: " + cube + "</h3>");
        num[i] = cube;
    }
    else{//if even
        let sqrt = Math.sqrt(num[i]);
        document.write("<h3> " + num[i] + " sqrt is: " + sqrt + "</h3>");
        num[i] = sqrt;
    }
}

//create a new cube and sqrt array loop for display element
document.write("<h3>New Array is: ");
for( i = 0; i < size; i++){
    document.write(num[i] + "  " );
}
document.write("<br>");

for( i = 0; i < size - 1; i++){
    for(j = 0; j < size - 1; j++){
    if(num[j] < num[j+1]){
        let temp = num[j];
        num[j] = num[j+1];
        num[j+1] = temp;
    }
}
}

//create a sorted array loop for display element in descending order
document.write("<br>Sorted Array is: ");
for( i = 0; i < size; i++){
    document.write(num[i] + "  " );
}
document.write("<br>");


//---------------------------------------------------- pro 5 -----------------------------------------------------------

document.write("<h1><u>Robo-Shop Assistant</u></h1>");

let budget = 20000;
let high_heels = 8000;
let lenses = 500;
let sweet_shirts = 6000;
let gold_ring = 33000;

//here use nested if else condition
if (budget >= high_heels) {
    document.write("<h3>High heels - shopping successful!</h3>");
    if (budget >= lenses) {
        document.write("<h3>Lenses - shopping successful!</h3>");
        if (budget >= sweet_shirts) {
            document.write("<h3>Sweet-shirts - shopping successful!</h3>");
            if (budget >= gold_ring) {
                document.write("<h3>Gold ring - shopping successful!</h3>");
            } else {
                document.write("<h3>Gold ring - Buy fewer items or cheaper alternatives!</h3>");
            }
        } else {
            document.write("<h3>Buy fewer items or cheaper alternatives!</h3>");
        }
    } else {
        document.write("<h3>Buy fewer items or cheaper alternatives!</h3>");
    }
} else {
    document.write("<h3>Buy fewer items or cheaper alternatives!</h3>");
}

