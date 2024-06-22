let a = prompt("Enter first number: ")
let b = prompt("Enter the second numbere")

if(isNaN(a) || isNaN(b)) {
    throw Error("enter a number only")
}

let sum = parseInt(a) + parseInt(b)

console.log(sum);

function main() {
    try {
        sum = sum * x 
        return true;
    } catch(error) {
        console.log(error);
        return false;
    } finally {
        // will always execute even if the code is returned 
        console.log("finally")
    }
}

console.log(main());