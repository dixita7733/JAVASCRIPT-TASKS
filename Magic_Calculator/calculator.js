//create and initialize functions

//create 1 jethalal function for salary
function jethalal_ki_salary_ka_hisab(salary){ //with use paramater salary
    console.log("Salary: " + salary); // display salary
    let halfSalary = salary * 0.5;  // use multiplication operation
    console.log("half salary of ₹" + salary + " is ₹" + halfSalary);     
    let gstRate = 15;
    console.log("GST Rate: " + gstRate);
    let gstAmount = (salary * gstRate) / 100; //use here multiplication and division operation
    let totalSalary = salary + gstAmount;
    console.log("Total salary with gst: " + totalSalary)

    let natukaka_salary = 10000;
    console.log("Natukaka salary: " + natukaka_salary);
    let bagheswar_salary = 10000;
    console.log("bagheswar_salary: " + bagheswar_salary);
    let divided_salary = salary - natukaka_salary - bagheswar_salary; //use minus
    console.log("Jethalal total Divided salrary without gst for natukaka and bagheswar: " + divided_salary )
}

//cretae 2 swapping function and initialize
function tapu_sena_ka_fun_experiment(){
   console.log("------------------------------------------------------");
   console.log("tapu sena ka fun experiment");
       console.log("-----------------------------------------------------");
   let sonu_number = 5;
   let goli_number = 10;
   console.log("Before jadduu sonu number is: " + sonu_number);
   console.log("Before jadduu goli number is: " + goli_number);
   let tapu_ka_jadu = sonu_number + goli_number;//15
   goli_number = tapu_ka_jadu - goli_number; //15 - 10 = 5 
   sonu_number = tapu_ka_jadu - sonu_number; //15 - 5 = 10
   console.log("                 ");
   console.log("After jadduu sonu number is: " + sonu_number);
   console.log("After jadduu goli number is: " + goli_number);
   console.log("---------------------------------------------------------");
}



// cretae 3 function and initialize
function Bhide_Sir_Ke_Students_Ka_Result(){
   let student_name = "Sonu";
   let student_mark = 88;
   
   if(student_mark >= 90){
       document.getElementById("result").innerHTML = `<h1>Result </h1><h5>A1 grade - Topper of the class </h5> `;
    //    console.log(student_name + " A1 grade - Topper of the class");
   }
   else if(student_mark >= 75 && student_mark <= 89){
   

      document.getElementById("result").innerHTML = ` <h1>Result </h1><h5>A2 - Good Effort </h5> `;

    //    console.log(student_name + " A2 - Good Effort");
   }
   else if(student_mark >= 50 && student_mark <= 74){

    document.getElementById("result").innerHTML = ` <h1>Result </h1><h5>B - Need Improvement </h5>`;
}
   else if(student_mark < 50){
    document.getElementById("result").innerHTML = ` <h1>Result </h1><h5>Fail - Padho Beta Padho </h5>`;
   }
  
}

//create 4 function and initialize
function Dayaben_Ki_Garba_Shopping(){
    console.log("      ")
    console.log("---------------------------------------------------");
    console.log("Dayaben Ki Garba Shopping!");

    let chaniya_choli = 10000;
    let dandiya = 300;
    let ornametnts = 4000;
    let dandiya_shoes = 5000;

    let total = chaniya_choli + dandiya + ornametnts + dandiya_shoes;
    let gst = total * 0.05; // 5% gst
    let bill = total + gst;

    document.getElementById("shopping_bill").innerHTML = `<h2>Garba Shopping Bill</h2> <h4>Chaniya Choli: <h4> <p> ${chaniya_choli} <p> <h4>Dandiya: <h4> <p> ${dandiya} <p> <h4>ornametnts: <h4> <p> ${ornametnts} <p> <h4>dandiya_shoes: <h4> <p> ${dandiya_shoes} <p> <h4>Total: ${total} </h4><h4>gst: ${gst} </h4><h4> Total ammount: ${bill}</h4> `
    
    if(bill > 1000){
        console.log("Dayaben ki Garba Shopping Successfull");
    }
}

//create 5 function and initialize
function Popatlal_Ka_Shaadi_Fund(){
    let principal = 50000;
    let rate = 7;
    let time = 4;

    let intrest = (principal * rate * time)/ 100; 
    let totalAmount = principal +intrest;

    document.getElementById("shadi_fund").innerHTML = `<h2>Popatlal Ka Shaadi Fund</h2> <h4>Interest: ${intrest} </h4><h4>Total Payable amount: ${totalAmount} </h4>`

   if(totalAmount > 50000){
      console.log("Shadi Fix kar lo Popatlal!");
   }
}

function Taarak_Mehta_Ki_Bonus_Calculation(){
    let basic_salary = 40000;
    let hra = basic_salary * 0.3; // 30%
    let da = basic_salary * 0.2;
    let tax = basic_salary * 0.1;

    let gross_salary = basic_salary + hra + da;
    let net_salary = gross_salary - tax;

    document.getElementById("bonuscalculation").innerHTML = `<h2>Taarak Mehta Ki Bonus Calculation</h2> <h4>Basic Salary: ${basic_salary} </h4> <h4>Gross Salary: ${gross_salary} </h4> <h4>Net Salary: ${net_salary} </h4>`

    if(net_salary > basic_salary){
        console.log("Tarak Mehta Ka Balance Perfect hai!");
    }
}



let salary = 100000;
if(salary != 0){ // condition if salary is not 0 so function call
   console.log("------------------------------------------------------");
   console.log("Jethalal ki salary ka hisab")
   console.log("------------------------------------------------------");
   jethalal_ki_salary_ka_hisab(salary);// call function

       console.log("          ");
}

tapu_sena_ka_fun_experiment();

Popatlal_Ka_Shaadi_Fund();

Taarak_Mehta_Ki_Bonus_Calculation();

Bhide_Sir_Ke_Students_Ka_Result();

Dayaben_Ki_Garba_Shopping();

