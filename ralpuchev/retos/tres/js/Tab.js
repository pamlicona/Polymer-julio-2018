class Tab extends AbstractObject{
    
    constructor(title, content, container){
        super();
        this.title = title;
        this.content = content;
        this.container = container;
    }
    
    show() {
        if(!this.container){
            console.log("There is no container, so we can't show Tab!");
            return;
        }  
        
        this.container.innerHTML = this.content;
    }
}