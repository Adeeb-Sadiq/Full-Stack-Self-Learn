// advance js

////////////////////////////////////////////////////////////////
// IIFE - Immediately Invoked Function Expression

async function sleep() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(45)
        }, 530000);
      
    })
}

(async function main() {
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
    await sleep();
})()

////////////////////////////////////////////////////////////////
// destructuring
let [x,y] = [4,5]
console.log(x,y);

let [p,q, ...rest] = [1,2,3,7,8,9,10,11,12,13]
console.log(p, q, rest);


let obj = {
    "a": "this is A",
    "b": "this is B",
    "c": "this is C"
}

let {c,b} = obj 
console.log(c,b);
////////////////////////////////////////////////////////////////
// spread syntax

function sum(a, b, c) {
    return a + b + c;
}

let arr = [1,2,3,4]

console.log(sum(...arr)); // spread arr

let o = {
    ...arr
}

console.log(o);
////////////////////////////////////////////////////////////////
// hoisting
                //  -- var a1
console.log(a1); // undefined


var a1 = 6 // sends all var variables to beginning of the block or function   -- a1 = 6


////

hello("programming") // function hoisting

function hello(l) {
    console.log(l);
}

// will not work for function created by const and arrow funciton


