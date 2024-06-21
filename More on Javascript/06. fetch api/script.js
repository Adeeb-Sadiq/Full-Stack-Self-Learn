 // ***** use await in async function only. this will stop the asyncronous nature of the javascript 


async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
}

async function main() {
    console.log("This is main funcion");
    
    await getdata();
    console.log("Promise done");
}

main();
