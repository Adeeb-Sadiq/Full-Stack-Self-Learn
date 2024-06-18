/* Faulty calculator 
10% chance to do the wrong operations:
+ --> -
* --> +
- --> /
/ --> *
*/

let a = 1;
let b = 1;

const add = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b;
}

const mul = (a,b) => {
    return a * b;
}

const div = (a,b) => {
    return a / b;
}

let randno = Math.random();
console.log(a,b);

if(randno < 0.1) {
    console.log("Addition: ", sub(a,b));
    console.log("Subtraction: ", div(a,b));
    console.log("Multiplication: ", add(a,b));
    console.log("Division: ", mul(a,b));
} else {
    console.log("Addition: ", add(a,b));
    console.log("Subtraction: ", sub(a,b));
    console.log("Multiplication: ", mul(a,b));
    console.log("Division: ", div(a,b));
}

if(randno > 0.1) {
    console.log();
    console.log();
    console.log();

    console.log("This is to test")
}