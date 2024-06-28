import fs from "fs/promises"

let a = await fs.readFile("two.txt")
console.log("\n\n");

console.log(a.toString());

let b = await fs.writeFile("one.txt", "this is written using promises")
console.log("done");

let c = await fs.appendFile("three.txt", "\n appending text")
console.log(c);


console.log("\n\n");
