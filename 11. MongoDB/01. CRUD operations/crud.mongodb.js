use("CrudDb")

// CREATE

// db.createCollection("courses")

// db.courses.insertOne({
//     name: "FSD course",
//     price: 300,
//     projects: 6
// })

// insert many will take a array - [{},{},{}]

// db.courses.insertMany([
//     {
//         name: "FSD course",
//         price: 300,
//         projects: 6
//     },
//     {
//         name: "Java",
//         price: 250,
//         projects: 3
//     },
//     {
//         name: "Python",
//         price: 250,
//         projects: 4
//     },
//     {
//         name: "AIML",
//         price: 550,
//         projects: 4
//     }
// ])

// READ

// let a = db.courses.find({projects:4})
// // console.log(a);
// // console.log(a.count());
// console.log(a.toArray());

// find one will return the first document which matched

// UPDATE

// USE updateone or updatamany 

// db.courses.updateOne({price:300}, {$set: {price: 500}})

// console.log(db.courses.find({price:500}));


// DELETE

// db.courses.insertOne({
//     name: "ruby",
//     price: 300,
//     projects: 4
// })

// db.courses.deleteOne({name: "ruby"})

