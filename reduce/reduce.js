// let arr = [1, 1, 5 , 5, 5];
// console.log(arr.reduce((acc , e) => acc += e)); 

let arr = [1, 1, 5 , 5, 5];
box = 0;
box2 = 0;
// let ans = arr.reduce((acc, e) => e == 1 ? acc ? e == 5 ? acc : console.log("0"), 0)
let ans_ternary = arr.reduce((acc, e) => e == 1 ? box++ : e == 5 ? box2++ : console.log("Nothing"), 1)
// let ans = arr.reduce((acc, e) => {
//     if(e == 1){
//         console.log("box1" + box++);
//     }
//     else if(e == 5){
//         console.log("box2" + box2++);
//     }
//     else{
//         console.log("Nothing")
//     }
//     return e;

// }, 1)
console.log(box)
console.log(box2)


// 2 price 

let phones =[
{ 
    Name : "samsung_galaxy_z",
    price : 150000
 },
{ 
    Name : "vivo_v40",
    price : 41999
},
{
    Name: "redmi_note_14",
    price : 30999
},
]

// let sum += phones.samsung_galaxy_z
let sum = phones.reduce((acc , e) => acc + e.price, 0); 
console.log(sum)





