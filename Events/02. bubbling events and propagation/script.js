const child = document.querySelector(".child");
const cc = document.querySelector(".childContainer");
const cont = document.querySelector(".container");

child.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("you clicked the child");
});

cc.addEventListener("click", (e) => {
    alert("you clicked the child Container");
});

cont.addEventListener("click", (e) => {
    alert("you clicked the container");
});

document.body.addEventListener("click", (e) => {
    alert("The document has been clicked too ")
})

