// Write a program that declares and initializes variables for a student's name (string), age (number), and passed (boolean), and display the information using the different output methods.

function func(){ //function create and initialize
    // let students_name = "Dishu"; //redeclare variable but dont allow to rediclar in let so comment in
    let students_name = "Dixita"; //create variable student_name using let
    students_name = "Dixita Devda" // reinitialize variable that allow bcs its define in let
    var age = 21;//create variable age using  var
    const passed = true;//create variable passed for boolean type using const so its fixed dont redclare and dont reinitialize
    const failed = false;//create variable failed for boolean type using const so its fixed dont redclare and dont reinitialize
    // const failed = 0; //not allow to redclare in const so comment in


    document.getElementById("year").innerText = "2025 Result";//define text that display in document file 
    document.getElementById("stud_info").innerHTML = `<br><b><u><h1>Student Result</h1> </b></u><h3> Student Name: ${students_name} </br> Student Age: ${age}  </h3>`//define text using html getting id in html file ${data} that use for define variable value



    if(passed == 1){//condition if boolean passed is true so that is true mits 1 
        age = 20;//reinitialize value but var use so allow to reinitialize 
        age = 21;//reinitialize value but var use so allow to reinitialize 
        console.log(students_name + " is passed in exam "); //display data using console.log so that display in console
        document.write("<h3>Student Result:  Passed..</h3>");//display in document file
        alert("Congratulations " + students_name + " You'r passed in exam");//display in pop up box bcs use alert

    }

}

func();//function call here