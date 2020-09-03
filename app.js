const myGreeting = document.getElementById("middle");
const myInput = document.getElementById("greeting-input")
const myButton = document.getElementById("greeting-button")
let myName = document.getElementById("myName")

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    myName.textContent = userInput;
});