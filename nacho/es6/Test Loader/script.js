const elem = document.querySelector('.loader');
var width = 0;

function startLoader(){
  timeOut();
};

function timeOut(){
  setTimeout(()=>frame(calculaWidth()), calculaTime())
}
function calculaTime(){
  return parseInt((Math.floor(Math.random() * 3) + 1).toString() + "000");
}

function calculaWidth(){
  let newWidth = Math.floor(Math.random() * 100) + 1 ;
  if((width + newWidth) > 100){
    return 100;
  }else{
    return width += newWidth;
  }
}

function frame(width){
  elem.style.width = width + '%';
  if (width == 100) {
    return
  }else {
    timeOut();
  }
}

function changeColor(){
  elem.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
