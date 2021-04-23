const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const day = new Date();
    const hour = day.getHours() ;
    const min = day.getMinutes();
    const second = day.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();