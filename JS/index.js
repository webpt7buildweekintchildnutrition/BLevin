
// start button

const startButton = document.querySelector('.start');
const startLink = document.querySelector('a');

const firstSection = document.querySelector('#first');

startButton.addEventListener('click', (event) => {
    firstSection.scrollIntoView(true);
    event.preventDefault();
});

// Carousel

class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.cards = this.carouselElement.querySelectorAll('.card');
        this.lastCardIndex = this.cards.length - 1;
        this.showImage();
    }
    showImage() {
        this.cards.forEach((card, index) => {
            card.style.order = index;
        })
        this.rightButton.addEventListener('click', () => {
            console.log('test');
            this.cards.forEach((card) => {
                if (card.style.order == this.lastCardIndex) {
                    card.style.order = 0;
                } else {
                    card.style.order = Number(card.style.order) + 1;
                }
            })
        })
        this.leftButton.addEventListener('click', () => {
            this.cards.forEach((card, index) => {
                if (card.style.order == 0) {
                    card.style.order = this.lastCardIndex;
                } else {
                    card.style.order = Number(card.style.order) - 1;
                }
            })
        })
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

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