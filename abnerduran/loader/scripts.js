'use strict';

const loaderButton = document.querySelector('.loader_button');
const loader = document.querySelector('.loader');
const h2 = document.querySelector('.h2');
const totalWidth = 100;
let width = 0;

loaderButton.addEventListener('click', startLoader);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

function startLoader() {
    showLoader(width);
}

function showLoader(width) {

    const randomWidth = getRandomInteger(10, 30);
    const randomTime = getRandomInteger(1, 5);
    width = width + randomWidth;

    setStyles(width, randomTime)
}

function setStyles(width, timeToTransition) {

    if (width < totalWidth) {
        loader.style.transition = `width ${timeToTransition}s ease`;
        loader.style.width = `${width}vw`;
        setTimeout(() => {
            showLoader(width);
        }, timeToTransition * 1000);
    } else {
        loader.style.transition = `width 5s ease`;
        loader.style.width = `100vw`;
        setTimeout(() => {
            h2.style.display = 'block';
        }, 5001);
    }

}

function changeLoaderColor(color) {
    loader.style.background = color;
}
