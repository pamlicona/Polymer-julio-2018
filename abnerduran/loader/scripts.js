'use strict';

const loaderButton = document.querySelector('.loader_button');
const loader = document.querySelector('.loader');
const redBtn = document.querySelector('.red');
const greenBtn = document.querySelector('.green');
const orangeBtn = document.querySelector('.orange');
const h2 = document.querySelector('.h2');

const getRandomtime = () => (Math.floor((Math.random() * 20) + 10)) * 1000; // 10 - 30
// const segmentsNumber = () => Math.floor((Math.random() * 7) + 4); // 4 - 10
const segmentsNumber = 5; // 4 - 10
const incrementWidth = 100 / segmentsNumber;
const incrementTime = () => getRandomtime() / segmentsNumber;

loaderButton.addEventListener('click', showLoader);
redBtn.addEventListener('click', changeToRed);
greenBtn.addEventListener('click', changeToGreen);
orangeBtn.addEventListener('click', changeToOrange);

function showLoader() {
    const time = getRandomtime();
    console.log(time);
    let width = 0;
    width += incrementWidth;
    setStyles(width).then(() => {

        width += incrementWidth;

        setStyles(width).then(() => {

            width += incrementWidth;
            setStyles(width).then(() => {

                width += incrementWidth;
                setStyles(width).then(() => {

                    width += incrementWidth;
                    setStyles(width).then(() => {
                        h2.style.display = 'block';
                    })

                })

            })

        })
    })
}

function setStyles(width) {
    let timeToTransition = incrementTime() / 1000 ;
    return new Promise((resolve, reject) => {
        loader.style.width = `${width}vw`;
        loader.style.transition = `width ${timeToTransition}s ease`;
        setTimeout(() => {
            resolve(true)
        }, incrementTime());
    });
}

function changeToRed() {
    loader.style.background = 'red';
}
function changeToGreen() {
    loader.style.background = 'green';
}
function changeToOrange() {
    loader.style.background = 'orange';
}