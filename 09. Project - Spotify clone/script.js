console.log("Functionality");

async function getSong() {
    let data = await fetch("http://192.168.0.112:3000/songs/")
    let songs = await data.text()
    
    let div = document.createElement("div")
    div.innerHTML = songs

    let as = div.getElementsByTagName("a")
    console.log(as);

    console.log(div);
}



getSong()