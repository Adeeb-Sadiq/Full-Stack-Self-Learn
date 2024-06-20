// title, cname, views, monthsold, duration, image 
// ${}
let styles = document.createElement("style");
styles.innerHTML = `
     body{
        background-color: black;
        color: white;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .card {
        display: flex;
        padding: 5px;
        gap: 20px;
        height: 100px;
        width: 80%;
        background-color: rgb(64, 64, 64);
        border-radius: 10px;
    }
    .serialNO{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
    }
    .thumbnail {
        display: flex;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }
    .thumbnail img {
        width: 180px;
        height: 100px;
    }
    .thumbnail .duration{
        position: absolute;
        bottom: 3px;
        right: 0px;
    }
    .texts {
        margin-left: 5px;
    }
    .texts .title {
        font-size: 31px;
    }
    .texts .details {
        display: flex;
        gap: 10px;
        font-size: 18px;
        margin-top: 10px;
    }
    .time{
        position: relative;
        z-index: 1;
    }
    .darkbox {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.4;
        z-index: 0;
    }
`;
document.head.append(styles);


let count = 0;
const generateCard = (title, image, cname, views, monthsOld, duration) => {
    count++;
    let container = document.querySelector(".container");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
        <div class="serialNO">${count}</div>
            <div class="thumbnail">
                <div class="img">
                    <img src=${image} alt="">
                </div>
                <div class="duration">
                    <div class="time">${duration}</div>
                    <div class="darkbox"></div>
                </div>
            </div>
            <div class="texts">
                <div class="title">${title}</div>
                <div class="details">
                    <div class="channel">${cname}</div>
                    <div class="views">${views}k</div>
                    <div class="months">${monthsOld}months old</div>
                </div>
            </div>

    `;

    container.append(card);
}

generateCard("This is a demo insertion of the card", "https://tse4.mm.bing.net/th?id=OIP.Met_wGkMcwd1-a8nD455gwHaFj&pid=Api&P=0&h=180", "NewAge", "200", 7, "30:00");

while(true) {
    let userchoice = confirm("DO you want to add more cards?");
    if(!userchoice) {
        break;
    } else {
        let usertitle = prompt("Enter the title");
        let userimage = prompt("Enter the image url");
        let userChannel = prompt("Enter the channel name");
        let userviews = prompt("Enter the views it has");
        let userVideoage = prompt("How long back the video was released in months");
        let userduration = prompt("What's the duration of the vidio in string ");
        generateCard(usertitle, userimage, userChannel, userviews, userVideoage, userduration);
    }
}