async function getdata(val) {
    // simulate getting data from server 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
          }, val)
    })
}

async function main() {
    console.log("This is main funcion");
    
    
    let a = await getdata(2000); // ***** use await in async function only 
    // this will stop the asyncronous nature of the javascript 
    console.log(a);
    
    let b = getdata(10);
    console.log(b);
    console.log("Promise done");
    
}

main();