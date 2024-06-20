const button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".context").innerHTML = "<b>This was a example of event listener.</b>"
    document.body.style.backgroundColor = "white"
})

button.addEventListener("dblclick", () => {
    document.querySelector(".context").innerHTML = "Double click response!"
    document.body.style.backgroundColor = "lightblue"
})

document.addEventListener("contextmenu", () => {
    alert("do not right click please")
})