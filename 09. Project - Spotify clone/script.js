console.log("Functionality");

let currentsong = new Audio();

function playMusic(str) {
    currentsong.src = "/songs/" + str
    currentsong.play();
    play.src = "assets/pause.svg"
    document.querySelector(".display-music").innerHTML = str
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

async function main() {
    // get the song form the directory 
    let songs = await getSongs()
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
        console.log(e.target.getBoundingClientRect(), e.offsetX);
        let per = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".seek-pointer").style.left = per + "%";
        currentsong.currentTime = (currentsong.duration * per) / 100 
    })

}

main()
