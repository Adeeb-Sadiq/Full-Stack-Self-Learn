console.log("Functionality");

let currentsong = new Audio();
let songs
let albums = []

async function createCard(e) {
    // console.log(e);
    let cover, title, description
    let link = e
    let data = await fetch(e)
    let text = await data.text();
    // console.log(text);
    let temp = document.createElement("div")
    temp.innerHTML = text
    let a = temp.querySelectorAll("a").forEach(e => {
        // console.log(e.href);
        if(e.href.includes("cover.jpg")) {
            cover = e.href
            // console.log(e.href);
        }
        
    });
    






    const cardContainer = document.querySelector(".card-container");
    let div = document.createElement("div")
    div.setAttribute("class", "card")
    div.innerHTML = 
    `
        <img src="${cover}" alt="" class="rounded">

        <h3>${title}</h3>
        <p>${description}</p>
    `
    cardContainer.append(div)
}

function playMusic(str) {
    currentsong.src = "/songs/" + str
    currentsong.play();
    play.src = "assets/pause.svg"
    let displayName = str
    // console.log(displayName);
    document.querySelector(".display-music").innerHTML = displayName.replaceAll("%20", " ")
    document.querySelector(".display-duration").innerHTML = "00:00"
}

function secondsToMinutes(seconds) {
    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    
    const remainingSeconds = totalSeconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    
    return minutes + ':' + formattedSeconds;
}


async function getSongs() {
    let data = await fetch("http://192.168.0.112:3000/songs/")
    let text = await data.text()
    // console.log(text);
    let div = document.createElement("div")
    div.innerHTML = text
    let a = div.getElementsByTagName("a")
    // console.log(a);
    let songs = []
    div.querySelectorAll("a").forEach(e => {
        if (e.href.endsWith(".mp3")) {
            songs.push(e.href.split("/songs/")[1])
        }
    });
    // console.log(songs);
    return songs
}

async function getAlbumSongs(folder) {
    let data = await fetch(`http://192.168.0.112:3000/songs/${folder}`)
    let text = await data.text()
    // console.log(text);
    let div = document.createElement("div")
    div.innerHTML = text
    let a = div.getElementsByTagName("a")
    // console.log(a);
    let songs = []
    div.querySelectorAll("a").forEach(e => {
        if (e.href.endsWith(".mp3")) {
            songs.push(e.href.split("/songs/")[1])
        }
    });
    // console.log(songs);
    return songs
}

async function main() {
    // get the song form the directory 
    songs = await getSongs()
    // console.log(songs);

    // get the music list layout form the html
    let musicList = document.querySelector(".musicList")
    musicList.innerHTML = ""
    // displaying all the music 
    for (const song of songs) {
        musicList.innerHTML = musicList.innerHTML + `
           <div class="song flex pointer">
                        <div class="song-photo">
                            <img class="invert" src="assets/music-note-03-stroke-rounded.svg" alt="">
                        </div>
                        <div class="song-name">
                            ${song.replaceAll("%20", " ")}
                        </div>
                        <div class="song-play">
                            <img class="music-play invert" src="assets/play-stroke.svg" alt=""> 
                        </div>
                    </div>
        
        `
    } // ${song.replaceAll("%20", " ")}

    // adding event listener 
    Array.from(document.querySelector(".musicList").getElementsByClassName("song")).forEach(ele => {
        ele.addEventListener("click", () => {
            // console.log(ele.querySelector(".song-name").innerHTML);
            playMusic(ele.querySelector(".song-name").innerHTML.trim())           
        })
    })

    // music control
    play.addEventListener("click", () => {
        if(currentsong.paused) {
            currentsong.play()
            play.src = "assets/pause.svg"
        } else {
            currentsong.pause()
            play.src = "assets/play-stroke.svg"
        }
    })

    // time update event
    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime, currentsong.duration);
        document.querySelector(".display-duration").innerHTML = `${secondsToMinutes(currentsong.currentTime)} / ${secondsToMinutes(currentsong.duration)}`
        document.querySelector(".seek-pointer").style.left = (currentsong.currentTime / currentsong.duration) * 100 + `%`;
    })

    // event listener for seekbar
    document.querySelector(".seek").addEventListener("click", e => {
        // console.log(e.target.getBoundingClientRect(), e.offsetX);
        let per = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".seek-pointer").style.left = per + "%";
        currentsong.currentTime = (currentsong.duration * per) / 100 
    })

    // hamburger event
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = 0;
    })

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%" ;
    })
    
    next.addEventListener("click", () => {
        // console.log("next");
        // console.log(currentsong.src);
        // console.log(songs.indexOf(currentsong.src.split("/").slice(-1)[0]));
        let currentIndex = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        // console.log(currentIndex);
        let nextIndex = currentIndex + 1
        // console.log(songs.length);
        if(currentIndex == songs.length - 1){
            playMusic(songs[0])
        } else {
            playMusic(songs[nextIndex])
        }
    })

    previous.addEventListener("click", () => {
        // console.log("previous");
        let currentIndex = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        let previousIndex = currentIndex - 1
        if(previousIndex == -1) {
            playMusic(songs[songs.length  -1])
        } else {
            playMusic(songs[previousIndex])
        }
    })

    // volume controls
    document.querySelector(".volume-control").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log(e.target.value)
        currentsong.volume = parseInt(e.target.value) / 100
    })

    albums = await getAlbums()
    // console.log(albums);
    albums.forEach(e => {
        // console.log(e.href);
        createCard(e.href)
    })

}

async function getAlbums() {
    let data = await fetch("http://192.168.0.112:3000/songs/")
    let text = await data.text();
    // console.log(text);
    let div = document.createElement("div")
    div.innerHTML = text
    let a = div.getElementsByTagName("a")
    div.querySelectorAll("a").forEach(e => {
        if(e.href.includes("songs")) {
            albums.push(e)
        }
    })
    return albums
}


main()

