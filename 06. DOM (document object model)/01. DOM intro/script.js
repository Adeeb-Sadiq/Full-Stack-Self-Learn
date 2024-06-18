// remove the console clear to view output on browser 

document.title = "Welcome to DOM";

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);


console.clear()

console.log(document.body.firstChild)
console.log(document.body.lastChild)

let cont = document.body.childNodes[1];
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);


console.clear();

document.body.childNodes[1].childNodes[1].style.backgroundColor = "red";
document.body.childNodes[1].lastElementChild.style.backgroundColor = "blue";

/*
then you have :
.parentElement - to show a parent of a element
.previousElementSibling
.nextElementSibling
*/

document.body.childNodes[1].lastElementChild.parentElement


console.clear();

// to get all the element nodes
document.body.firstElementChild.children

console.log(document.body.firstElementChild.children);

document.body.firstElementChild.children[3]

let a = document.body.firstElementChild.children[3]

a.style.backgroundColor = "green";

