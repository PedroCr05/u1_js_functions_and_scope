// Functions!

// Declaring a named function
    // This is a parameter
function sayHello(name, time, day) {
    // This is the parameter's a variable
        // Our Parameters and Variables DO NOT have to be in the same order
    console.log(`
        Hello there ${name}!
        Hope you're having a wonderful ${time}!
        I enjoyed our time ${day}.
        `);
    }

// Calling a function
    // This is passing in the argument
sayHello(`Shonnairn`, `morning`, `yesterday`);
sayHello("Mai", `afternoon`, `last Friday`);
sayHello('Juno', `evening`,  `four weeks ago`);
// Our Parameters and Arguments DO have to be in the same order

function saySomething () {
    // You can't hoist an arrow function
    // Which means you can't call it before you declare it
}

const sayGoodbye = (name) => console.log(`Goodbye ${name}.`);
    // While this is CAN hoist the arrow function
    // Meaning this actually makes your lines of code even shorter
        // The arrow function is a variable that stores a function
        // Don't worry. It is confusing... dont worry about it, they worl (mostly) the same

sayGoodbye(`summoner`);

// Write 2 function, one that adds 2 numbers, one that subtracts 2 numbers
// For both functions, the parameters should be num1 and num2
// Which you will pass as arguments when you call the functions

let num1 = 27;
let num2 = 937;

for num1 (let i < 0; i < num2; i++) {
    console.log()
}

    // I have to remember to use functions or const
        // Examples by others

function sub(num1, num2) {
    console.log(num1 - num2)
}
function add(num1, num2) {
    console.log(num1 + num2)
}

function subadd(num1, num2, choice) {
    if (choice === 0) {
        console.log(num1 - num2)
    } else if (choice === 1) {
        console.log(num1 + num2)
    }
}

sub(4, 9)
add(4, 9)
subadd(4, 9, 1)
subadd (4, 9, 0)
//     // Code by: Barry (she/her)

const addNumber = (num1, num2) => console.log(num1 + num2)
const subNumber = (num1, num2) => console.log(num1 - num2)
addNumber(5, 4)
subNumber(5, 4)
//     // Code by: Aline Muller

// // Arrow function that adds two numbers
const addNumbers = (num1, num2) => num1 + num2;
// // Arrow function that subtracts two numbers
const subtractNumbers = (num1, num2) => num1 - num2;
// // Call the functions and pass arguments
let resultAdd = addNumbers(10, 5);  // Example: 10 + 5
let resultSubtract = subtractNumbers(10, 5);  // Example: 10 - 5
console.log(“Addition result:“, resultAdd);  // Output: 15
console.log(“Subtraction result:“, resultSubtract);  // Output: 5
    // Code by Jake Pagnotto

// if () {}
// for () {}
// switch () {}
// function () {}

// Parent scope will go into Child Scope -. Child Scope will not override Parent Scope

// Parent - global, child - local
    // Sibling Scope will not go into another Sibling Scope

const name = `Shonnairn`;
// // Sibling 1
{
    const name = `Cryptic`;
    console.log(`Line 17`, name);
    const favoriteBook = `Percy Jackson`;
}
// // Sibling 2
// // Shonnairn
{
    console.log(`line 105`, name);
}
console.log(`Line 92`, name);
    // This doesn't work because favoriteBook is not in the MAIN code. (Parent)
    console.log(`Line 102`, favoriteBook);

