//nested functions

function myfunc(){
    let a = "hello";
    function innerfunc(){
        console.log(a + " Everyone");
    }
    
    innerfunc();
}

myfunc();

//functions used as a variable 
let min = 5;
const varfunc = function() {
    if(min < 10){
        console.log("5 is min");
    }
}
varfunc();

//arrow function 

const arrowfunc = () => 5 + 2;
console.log(arrowfunc());

// Immediately Invoked Function Expression (IIFE)

(function myfunc(){
    console.log("Hello");
})();
