console.log('Example of promise');

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if(a < 0.5) {
    reject("Not supported at this moment");
  }
  else {
    setTimeout(() => {
        console.log('this is a promise');
        resolve("resolved");
      }, 1000);
  }
})

// prom1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);  
// });


// promise apis :
// promise.all

let prom2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log("This is promise 2 ");
    resolve("Resoved 2");
  }, 1000)
})
// .all only return then if all are resolved 
let p3 = Promise.all([prom1, prom2]);

p3.then((a) => {
  console.log(a);  
}).catch((err) => {
  console.log(err);  
})

// all settled gives the array for all resolved and rejected 
let p4 = Promise.allSettled([prom1, prom2]);

p4.then((a) => {
  console.log(a);  
}).catch((err) => {
  console.log(err);  
})

// more apis::

// .race - returns which ever finishes first either resolve or rejected 
// .any - first fullfill promise will be the outcome 

// .resolve(value)
// .reject(error)
// make a resolve promise for the value and vice versa. 