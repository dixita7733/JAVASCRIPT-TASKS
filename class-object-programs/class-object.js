// #### **Task 1: Class & Object Creation**  
// - Create a **class** named `Student` with properties:  
//   - `name`, `age`, and `course`.  
// - Create multiple **objects** of this class using the `new` keyword.  
// - Print the object details using `console.log()`.  

class Student1{
    constructor(name , age , course){
        this.name = name;
        this.age = age;
        this.course = course

    }
}
let stud = new Student1("Mahi", 18, "fullstack");
console.log("Name: " + stud.name +  ", Age: " + stud.age + ", Course: " + stud.course);

// #### **Task 2: Using `this` Keyword**  
// - Add a **method** inside the `Student` class named `getDetails()` that returns the student's details.  
// - Use the `this` keyword inside the method to access object properties.  

class Student2{
    getDetails(name , age , course){
        this.name = name;
        this.age = age;
        this.course = course

        return("Name: " + this.name +  ", Age: " + this.age + ", Course: " + this.course)

    }
}
let stud2 = new Student2();
console.log(stud2.getDetails("joy", 15, "graphic-design"));

// #### **Task 3: Constructor Arguments**  
// - Modify the `Student` class constructor to accept parameters (`name`, `age`, `course`) when creating an object.  
// - Create multiple student objects by passing different values.  

class Student3{
    constructor(name , age , course){
        this.name = name;
        this.age = age;
        this.course = course

    }
}
let stud3 = new Student3("Rucha", 22, "Mern-stack");
let stud4 = new Student3("Priya", 30, "Android");
console.log("Name: " + stud3.name +  ", Age: " + stud3.age + ", Course: " + stud3.course);
console.log("Name: " + stud4.name +  ", Age: " + stud4.age + ", Course: " + stud4.course);

// - Create another class `Teacher` with properties `name`, `subject`, and `experience`.  
// - Add a method `introduce()` to print details using `this` keyword.  
// - Create objects of the `Teacher` class and call `introduce()`.  

class Teacher{
    introduce(name , subject , experience){
        this.name = name;
        this.subject = subject;
        this.experience = experience;

        console.log("Name: " + this.name + ", Subject: " + this.subject + ", experience: " + this.experience)
    }
}
let obj = new Teacher();
obj.introduce("Daisy", "Designing", "3 Year");