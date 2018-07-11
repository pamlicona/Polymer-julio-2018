const progessBar = document.querySelector('.progress__bar')
const imageBar = document.querySelector('.image')
let progress = 0

let updateProgressbar = () => {
  if (progress >= 100) {
    clearInterval(startProgress)
    imageBar.innerHTML = `<div><img src="img/finish.jpeg"></div>`
  } else {
    progress += Math.random() * 20
    progessBar.style.width = progress + '%'
  }
}

let startProgress = () => {
  setInterval(updateProgressbar, Math.random() * 2000)
}