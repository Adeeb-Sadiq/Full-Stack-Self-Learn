// async nature
{    
    console.log("This is line 1")
    console.log("THis is line 2")
    
    // setTimeout(() => {
    //     console.log("This is set timeout ")
    // }, 1000);
    
    // setTimeout(() => {
    //     console.log("This is set timeout 2 ")
    // }, 0);
    
    
    console.log("this is line 3")
    
    console.log("The end")
}
console.clear();
// example of callback
const callback = () => {
  console.log("this is callback function");
}

const fun = (str, callback) => {
    console.log(str);
    callback();
}

fun("Adeeb", callback);

