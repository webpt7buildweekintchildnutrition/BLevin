
const startButton = document.querySelector('.start');
const startLink = document.querySelector('a');

const firstSection = document.querySelector('#first');

startButton.addEventListener('click', (event) => {
    firstSection.scrollIntoView(true);
    event.preventDefault();
});



/*Donate Page*/

const button = document.querySelector(".donate-button");
// const img = document.querySelector("img");
// const clickHandler = function () {
//     this.classList.toggle("btn-class");
// }

button.addEventListener("click", (event) => {
    event.stopPropagation()
    button.classList.toggle("btn-class");
    // img.style.display = "none";
    if (button.textContent === "Donate Here") {
        button.textContent = "Thank you, you beautiful human being"
    } else {
        button.textContent = "Donate Here"
    }
});