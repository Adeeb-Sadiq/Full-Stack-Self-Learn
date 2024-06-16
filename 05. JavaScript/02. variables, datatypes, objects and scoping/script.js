// differences between var, let and const
var a = 20; // global variable by default
{
    var a = 2; // changes the global value too
}

let b = 20; // block variabe
{
    let b = 1; // value available only to the block
}

const c = 33; // constant variable, block level and value can't be changed
// c = 22; // not allowed!


// privmitive datatypes - 
let d = 12; // number
let f = 12.232; // number
let s = "hello world"; // string
let n = null // object
console.log(typeof n);
let u = undefined; // undefined

// objects
let o = {
    "name": "Adeeb",
    "job role": "Developer",
    salary: 7000000  // one word does not require the quotes for key
};
o.company = "abc";
console.log(o);