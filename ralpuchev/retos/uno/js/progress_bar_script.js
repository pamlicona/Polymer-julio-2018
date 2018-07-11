'use strict';

const bar = document.querySelector(".progress_bar");

var progressBar = function() {
    
    this.currentBarProgress = 0;
    this.currentTransitionTime = 0;
    
    this.startProgressBar = function(){
        if(!bar){
            console.log("no hay bar en html!");
            return;
        }
        
        this.currentBarProgress = 0;
        this.currentTransitionTime = 0;
        bar.style.transition = this.currentTransitionTime+"s linear";
        bar.style.width = this.currentBarProgress+"%"; 
        
        this.addWidthToProgressBar();
    }
    
    this.addWidthToProgressBar = function(){
        console.log("currentProgress: "+this.currentBarProgress);
        if(this.currentBarProgress >= 100){
            //la barra se ha cargado completamente
            alert("status : 500 - Internal Server Error");
            return;
        }   
        
        this.currentBarProgress += this.getRandomNumber(10, 20);
        if(this.currentBarProgress > 100) this.currentBarProgress = 100;
        //bar.innerHTML = this.currentBarProgress + "%";
        
        //this.changeBarColor();
        
        this.currentTransitionTime = this.getRandomNumber(3, 8);
        
        bar.style.transition = this.currentTransitionTime+"s linear";
        bar.style.width = this.currentBarProgress+"%";    
        
        console.log("this.currentTransitionTime: "+this.currentTransitionTime*1000);
        
        setTimeout(function(){progress.addWidthToProgressBar()}, this.currentTransitionTime*1000);
    }
    
    this.getRandomNumber = function(numeroInferior, numeroSuperior){
        return Math.floor((Math.random() * numeroSuperior) + numeroInferior);
    }
    
    this.changeBarColor = function(){
        let colors = ['blue', 'red', 'green', 'orange', 'purple', 'cyan', 'gray'];
        bar.style['background-color'] = colors[this.getRandomNumber(0, colors.length)];
    }
}

var progress = null;

let startLoader = function(){
    if(!progress) progress = new progressBar();
    progress.startProgressBar();
}

function changeBarColor(){
    if(progress){
        progress.changeBarColor();
    }
}

