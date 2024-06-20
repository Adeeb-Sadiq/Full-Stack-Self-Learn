const child = document.querySelector(".child")
const cc = document.querySelector(".childContainer")
const con = document.querySelector(".container")

let a = setInterval(() => {
    child.style.backgroundColor = colorGenrator();
}, 600);

setTimeout(() => {
    cc.style.backgroundColor = colorGenrator();
}, 2000);


const colorGenrator = () => {
    return `rgb(${(1 + Math.random() * (240 - 1))} ${(1 + Math.random() * (240 - 1))} ${(1 + Math.random() * (240 - 1))})`
}

console.log(a);


// to remove interval or timeout just store it in variable and use removeinterval(a) m removetimeout(a);

