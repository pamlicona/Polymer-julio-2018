const progessBar = document.querySelector('.progress__bar')
const imageBar = document.querySelector('.image')
var progress = 0

let getRandom = (interval) => Math.random() * interval

let addImage = () => {
  clearInterval(startProgress)
  imageBar.innerHTML = `<div><img src="img/finish.jpeg"></div>`
}

let updateProgressbar = () => {
  if (progress >= 100) {
    addImage()
  } else {
    progress += getRandom(20)
    progessBar.style.width = progress + '%'
  }
}

let startProgress = () => {
  setInterval(updateProgressbar, getRandom(2000))
}
