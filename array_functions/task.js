// 1] Given an array of numbers [1, 2, 3, 4, 5], use the map() method to create a new array where each number is multiplied by 10.

let mapnum = [1,2,3,4,5];
console.log( mapnum.map(mynum => mynum * 10));

// 2] Given an array of numbers [12, 5, 8, 20, 3], use the filter() method to create a new array containing only numbers greater than 10.

let filternum =  [12, 5, 8, 20, 3];
console.log(filternum.filter(myfilternum => myfilternum > 10))

// 3] Given an array of strings ["Hello", "World", "JavaScript"], use the forEach() method to log each string to the console in uppercase.

// 4] Given an array ["cat", "dog", "elephant", "tiger"], use the indexOf() method to find the index of the element "elephant".

let indexanimals = ["cat", "dog", "elephant", "tiger"];
console.log(indexanimals.indexOf("dog"))

// 5] Given an array of numbers [7, 14, 21, 28, 35], use the findIndex() method to find the index of the first number that is divisible by 7 and greater than 20.

let findindexnum = [ 7, 14, 21, 28, 35];
console.log(findindexnum.findIndex(myfindindex => myfindindex % 2 === 0))

// 6] Given an array ["apple", "banana", "cherry"], use the includes() method to check if the array contains the string "banana".

let includefruites = ["apple", "banana", "cherry"]
console.log(includefruites.includes("banana"))

//7] Given an array of numbers [10, 20, 30, 40, 50], use the every() method to check if every number in the array is greater than 5.

let everynum = [10, 20, 30, 40, 50];
console.log(everynum.every(allnum => allnum < 5))

//8] Given an array of numbers [3, 7, 11, 15, 19], use the some() method to check if at least one number in the array is even.

let somenum = [3, 7, 11, 15, 19];
console.log(somenum.some(allsomenum => allsomenum < 10))

//bonus chalange] Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the filter() method to keep only even numbers, then use the map() method to square each of those numbers.

let bonus_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bonus_filter = bonus_array.filter(my_bonus => my_bonus % 2 === 0)
let bonus_map =  bonus_filter.map(my_bonus => my_bonus ** 2)
console.log(bonus_map);