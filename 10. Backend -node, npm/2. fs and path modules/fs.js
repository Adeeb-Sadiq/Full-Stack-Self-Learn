// change to common js to execute this 


const fs = require("fs")



console.log(fs);

console.log("starting");
fs.writeFileSync("one.txt", "I like javascript")
console.log("ending");

console.log("starting");
fs.writeFile("two.txt", "This is the second file", () => {
    console.log("done");
})
console.log("ending");


console.log("starting");
fs.writeFile("two.txt", "This is the second file", () => {
    console.log("done");

    fs.readFile("two.txt", (error, data) => {
      console.log(error);
      console.log(data);
      console.log(data.toString());
    })

})
console.log("ending");

fs.appendFile("three.txt", "appending string ", (error, data) => {
    console.log(data);
})

fs.readFile("one.txt", (err, data) => {
    console.log("\n\n" + data + "\n\n");
})



