let loan_amount = 1000000;

let interest_rate = 6.5; // %

let tenure = 5; // year

let r = (interest_rate / 100) / 12;
console.log("r: " + r);

let n = tenure * 12;

console.log("n: " + n);

let emi;
emi = (loan_amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

console.log("emi: " + emi);

let total_amount;

total_amount = emi * n

console.log("total_amount " + total_amount);

let total_interest;

total_interest = total_amount - loan_amount;

console.log("total_interest " + total_interest)