console.clear();

let arr = [1,3,7,11,22];

// arrays are mutable
console.log("");
console.log("arrays are mutable");
console.log(arr)
arr[0] = 65;
console.log(arr);

// type of array is object
console.log("type of array is object");
console.log(typeof arr);

console.log("\n\n")

// methods on arrays
console.log("methods on arrays");

console.log(arr.toString()) //converts to string

console.log(arr.join(" and ")) //repalce , to and

console.log("\n\n")

console.log(arr.pop()) // removes the last element in an array
console.log(arr)

arr.push("hello") // returns the new length

console.log(arr);

/* 
others like :
shift and unshift - shift left or right similar to pop and push
delete - memory allocation is not removed, undefined in the deleted position
concat - to merge the arrays, does not change the existing arrays, returns a new array.
sort- sorts the original array
splice - removes elements in a range, also add numbers passed in arguments from the removed indexs 
slice - return new array of given range of original


*/
console.log("\n\n")

console.log(arr.length)
console.log(arr.shift()); // pop at 0
console.log(arr);
console.log(arr.length)
console.log(arr.unshift(5555))
console.log(arr);
console.log(arr.length)

console.log("\n\n")

// loops for arrays **
console.log("loops for arrays **");

let a = [1,22,3,4,88]

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
});
console.log("\n")

for (const element of a) {
    console.log(element)    
}

console.log("\n\n")

// map reduce filter ***********
console.log("map reduce filter ***********");

a = [1,2,3,4,11]

let newA = a.map(e=> {
    return e**2;
});
console.log(newA)

console.log("\n\n")
// filter  *****
console.log("filter  *****");

a[0] = 12;
console.log(a);
newA = a.filter(e=>{
    if(e > 3) {
        return e;
    }
})
console.log(newA)

console.log("\n\n")

// reduce function 
console.log("reduce function");

let arr2 = [1,1,1,2]
const red = (a,b) => {
    return a + b;
}
console.log(arr2 + " adding all the values using reduce function")
console.log(arr2.reduce(red))

console.log("\n\n")
// array from function
console.log("array from function");

let str = "Football";
console.log(Array.from(str));
