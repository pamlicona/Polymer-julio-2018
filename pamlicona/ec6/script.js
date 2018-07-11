const progessBar = document.querySelector('.progress__bar')
let progress = 0

let updateProgressbar = () => {
  if (progress < 100) {
    progress += Math.random() * 20
    progessBar.style.width = progress + '%'
  } else {
    clearInterval(startProgress)
  }
}

let startProgress = () => {
  setInterval(updateProgressbar, Math.random() * 2000)
}