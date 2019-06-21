const startButton = document.querySelector('.start');
const startLink = document.querySelector('a');

const firstSection = document.querySelector('#first');

startButton.addEventListener('click', (event) => {
    firstSection.scrollIntoView(true);
    event.preventDefault();
});

