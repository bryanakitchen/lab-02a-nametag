const myGreeting = document.getElementById("middle");
const myInput = document.getElementById("greeting-input")
const myButton = document.getElementById("greeting-button")
let myName = document.getElementById("myName")

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    myName.textContent = userInput;
});

const myPinkBackgroundButton = document.getElementById("pink-background");
const myBlueBackgroundButton = document.getElementById("blue-background");
const myGrayBackgroundButton = document.getElementById("gray-background");
const randomizeButton = document.getElementById("randomize");

const myBody = document.getElementById('body');

myPinkBackgroundButton.addEventListener('click', () => {
    myBody.style.background = "pink";
})

myBlueBackgroundButton.addEventListener('click', () => {
    myBody.style.background = "blue";
})

myGrayBackgroundButton.addEventListener('click', () => {
    myBody.style.background = "rgb(134, 134, 134)";
})

randomize.addEventListener('click', () => {
    if (myBody.style.background === "pink") {
        myBody.style.background = "blue";
    } else if (myBody.style.background === "blue") {
        myBody.style.background = "rgb(134, 134, 134)";
    } else if (myBody.style.background === "rgb(134, 134, 134)") {
        myBody.style.background = "pink";
    }
})