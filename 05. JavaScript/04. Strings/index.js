console.log("Strings in javascript, they are immutable"); 

let a = "Code";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]); // undefined

console.log(a.length)

let js = "JavaScript";

//template  literals
console.log(`This code is written using "${js}" in vscode`)

//escape sequence
console.log("is you wanna add \"double quotes\" use this \nand a new line ");
    // can use backticks too 

// strig mmanipulation
let b = "Hello World";
console.log(b);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1,5));  // second number will not be included
console.log(b.slice(5)); // 5 to end

console.log(b.replace("He","454")); // replace the first occurance

console.log(b.concat(a)); // concatenation

console.log(b.concat(a, " concatenation", " with nodejs")); // concatenation

console.log(b); // strings are immutable
