let folders = []
let songs = []

// current music
let currentsong = new Audio()


// getting directories
async function getFolders() {
    let raw = await fetch("http://127.0.0.1:3000/songs/")
    let data = await raw.text()
    let div = document.createElement("div")
    div.innerHTML = data
    div.querySelectorAll("a").forEach((ele) => {
        if (ele.href.includes("/songs/")) {
            folders.push(ele.href)
        }
    })
}

// rendering the playlist 
async function displayFolder() {
    let cover, title, disc
    folders.forEach(async (ele) => {
        let raw = await fetch(ele)
        let data = await raw.text()
        let div = document.createElement("div")
        div.innerHTML = data
        div.querySelectorAll("a").forEach((ele) => {
            if (ele.href.includes("cover.jpg")) {
                cover = ele.href
            }
            if (ele.href.includes("info.json")) {
                createCard(cover, ele.href)
            }
        })
    })
}

async function createCard(cover, link) {
    let title, description
    let rawJson = await fetch(link)
    let data = await rawJson.json();
    title = data.title
    description = data.description

    // appending the card
    let div = document.createElement("div")
    div.setAttribute("class", "card")
    div.innerHTML = `
        <img src="${cover}" alt="" class="rounded">
        <h3>${title}</h3>
        <p>${description}</p>
    
    `
    div.addEventListener("click", (e) => {
        link = link.split("info.json")[0]
        // console.log(link);
        currentsong.pause()
        play.src = "assets/play-stroke.svg"
        functionality(link)
    })

    document.querySelector(".card-container").append(div)
}



// get songs
async function getSongs(link) {
    let raw = await fetch(link)
    let data = await raw.text()
    let div = document.createElement("div")
    div.innerHTML = data
    div.querySelectorAll("a").forEach(e => {
        if (e.href.endsWith(".mp3")) {
            songs.push(e.href)
        }
    })

    return songs
}

async function playMusic(link, song) {
    if (song == null) {
        currentsong.src = link
    } else {
        currentsong.src = link + song
    }
    currentsong.play()
    play.src = "assets/pause.svg"

    if (song != null) {
        let dname = song
        document.querySelector(".display-music").innerHTML = dname.replaceAll("%20", " ")
    } else {
        let dname = link
        document.querySelector(".display-music").innerHTML = dname.split("/")[5].replaceAll("%20", " ")
    }
}

function secondsToMinutes(seconds) {
    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);

    const remainingSeconds = totalSeconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return minutes + ':' + formattedSeconds;
}


async function functionality(link) {
    songs = []
    songs = await getSongs(link)
    let currentFolder = link.split("/songs/")[1]
    // add into music list
    let musicList = document.querySelector(".musicList")
    musicList.innerHTML = ""

    for (const song of songs) {
        musicList.innerHTML = musicList.innerHTML + `
            <div class="song flex pointer">
                <div class="song-photo">
                    <img class="invert" src="assets/music-note-03-stroke-rounded.svg" alt="">
                </div>
                <div class="song-name">
                    ${song.split(currentFolder)[1].replaceAll("%20", "  ")}
                </div>
                <div class="song-play">
                    <img class="music-play invert" src="assets/play-stroke.svg" alt="">
                </div>
            </div>
        
        `
    }
    playMusic(songs[0], null)
    // play music
    musicList.querySelectorAll(".song").forEach((e) => {
        e.addEventListener("click", () => {
            playMusic(link, e.querySelector(".song-name").innerHTML.trim().replaceAll("  ", "%20"))
        })
    })
}

// music control
play.addEventListener("click", () => {
    if (currentsong.paused) {
        currentsong.play()
        play.src = "assets/pause.svg"
    } else {
        currentsong.pause()
        play.src = "assets/play-stroke.svg"
    }
})
// time update
currentsong.addEventListener("timeupdate", () => {
    document.querySelector(".display-duration").innerHTML = `${secondsToMinutes(currentsong.currentTime)} / ${secondsToMinutes(currentsong.duration)}`
    document.querySelector(".seek-pointer").style.left = (currentsong.currentTime / currentsong.duration) * 100 + `%`;
    if (currentsong.currentTime == currentsong.duration) {
        let currentIndex = songs.indexOf(currentsong.src)
        let nextIndex = currentIndex + 1
        if (currentIndex == songs.length - 1) {
            playMusic(songs[0], null)
        } else {
            playMusic(songs[nextIndex], null)
        }
    }
})

// seek bar
document.querySelector(".seek").addEventListener("click", e => {
    let per = (e.offsetX / e.target.getBoundingClientRect().width) * 100
    document.querySelector(".seek-pointer").style.left = per + "%";
    currentsong.currentTime = (currentsong.duration * per) / 100
})
// hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = 0;
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
})
// previous and next
next.addEventListener("click", () => {
    let currentIndex = songs.indexOf(currentsong.src)
    let nextIndex = currentIndex + 1
    if (currentIndex == songs.length - 1) {
        playMusic(songs[0], null)
    } else {
        playMusic(songs[nextIndex], null)
    }
})

previous.addEventListener("click", () => {
    let currentIndex = songs.indexOf(currentsong.src)
    let previousIndex = currentIndex - 1
    if (previousIndex == -1) {
        playMusic(songs[songs.length - 1], null)
    } else {
        playMusic(songs[previousIndex], null)
    }
})
// volume control 
document.querySelector(".volume-control").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    currentsong.volume = parseInt(e.target.value) / 100
})

async function main() {
    // reading the playlists
    await getFolders()

    document.querySelector(".card-container").innerHTML = ""
    await displayFolder()
}

main()