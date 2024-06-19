const colorGenrator = () => {
    return `rgb(${(1 + Math.random() * (240 - 1))} ${(1 + Math.random() * (240 - 1))} ${(1 + Math.random() * (240 - 1))})`
}

const boxes = () => document.querySelectorAll(".boxes").forEach(e => {
    e.style.backgroundColor = colorGenrator();
    e.style.color = colorGenrator();
}) ;

// console.log(colorGenrator());

boxes();

const message = document.createElement("div");
message.innerHTML = "Reload the page to change the colors";
document.querySelector(".container").before(message);