//Quitar variable global
//Quitar .style.
//Mostrar la imagen con una clase

const progessBar = document.querySelector('.progress__bar')
const imageBar = document.querySelector('.image')
var progress = 0

let getRandom = interval => Math.random() * interval

let addImage = () => {
  clearInterval(startProgress)
  imageBar.innerHTML = `<div><img src="img/finish.jpeg"></div>`
}

let stylesBar = progress => {
  progessBar.style.width = progress + '%'
}

let updateProgressbar = () => {
  if (progress >= 100) {
    addImage()
  } else {
    progress += getRandom(20)
    stylesBar(progress)
  }
}

let startProgress = () => {
  setInterval(updateProgressbar, getRandom(2000))
}
