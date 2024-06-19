console.log("Javascript: query selectors");


// get elements by class name 
let boxes = document.getElementsByClassName("box")
boxes[2].style.backgroundColor = "red";

// get element by id 
document.getElementById("blue").style.backgroundColor = "blue";

// query selector
document.querySelector(".box").style.backgroundColor = "green"
// target only first element of the class name 

// query selector all 
document.querySelectorAll(".box") // return a node list, containing all the elements

document.querySelectorAll(".box").forEach(e => {
    // e.style.backgroundColor = "yellow"
})

// get element by tag name
document.getElementsByTagName("div"); // return all the div elements in the page
