/*
/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let a = 11
let b = 12
const square = function(x) {
    return a * b;
};
console.log(a * b)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const c = 6
const d = 7
function crazySum(c, d) {
  if (c === d) {
    return c + d * 3
  } else if (c !== d) {
    return (c + d)
  }
}
console.log(crazySum(c,d))



/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const a = 19
const b = 9
function crazyDiff(a, b) {
    if (b > a) {
        return b - a * 3
    } else if (a > b) {
        return (a - b)
    }
}
console.log(crazyDiff(a,b))


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400. */

const n = 80
function boundary(n) {
    if (n === 400 || (n >= 20 && n <= 100)) {
        return true
    } else {
        return false
    }
}
console.log(boundary(n))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(someString) {
    if (someString.slice(0, 6).toLowerCase() == "Strive".toLowerCase()) {
        return someString
    } else {
        return "Strive".concat(someString)
    }
};
console.log(strivify("Strive"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(positiveNumber) {
    if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
        return true
    } else {
        return false
    }
};
console.log(check3and7(30))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/


function reverseString(string) {
var splitString = string.split("")
var reverseArray = splitString.reverse()
var joinArray = reverseArray.join("")
return joinArray
};
console.log(reverseString("Strive"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const str = ("only capitalized first letters")
const arr = str.split("")
for(var i = 0; i<arr.lenght;i++)
{
arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join("")
console.log(str2)

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let str = 'Strive'
console.log(str.slice 0, 6))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n)

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
