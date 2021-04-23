const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad(){
//     console.log("finished loading");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./Images/${imgNumber}.jpg`;
    image.classList.add("bgimage");
    // image.addEventListener("loadend", handleImgLoad);
    body.prepend(image);
}

function getRandom(){
    const number =  Math.floor(Math.random() * IMG_NUMBER)+1;
    return number;
}

function init(){
    const randomNumber = getRandom();
    console.log(randomNumber)
    paintImage(randomNumber);
}

init();