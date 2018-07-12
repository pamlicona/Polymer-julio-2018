class MultiTabController extends AbstractObject{

    constructor(container, instanceName) {
        super();
        this.container = container;
        this.instanceName = instanceName;
        this.selectedIndexTab = 0;
        this.tabs = [];
    }

    show(){
        if(!this.container){
            console.log(`There is no container, so we can't show MultiTabController!`);
            return;
        }   
        
        let html = `
            <div class="multi_tab">
                <div class='multi_tab_head'></div>
                <div class='multi_tab_body'></div>
            </div>
        `;
        
        this.container.innerHTML = html;
        
        let tabHome = new Tab('Inicio', `
            <br/>
            <h1>Hola! En el siguiente tab puedes agregar más tabs :D</h1>
        `, document.querySelector(".multi_tab_body"));
        
        let tabAddTabForm = new Tab('Add Tab', `
            <br/>
            <h2>Escribe título y contenido para agregar un nuevo tab</h2>
            <h3>Título: </h3>
            <input type="text" id="tab_title" class="tab_input"/>
            <br/>
            <h3>Contenido: </h3>
            <textarea id="tab_content" class="tab_input" rows="5"></textarea>
            <br/>
            <button class="tab_button" onclick="${this.instanceName}.addNewTab();">Agregar Tab</button>
            <br/>
        `, document.querySelector(".multi_tab_body"));
        
        this.tabs.push(tabHome);
        this.tabs.push(tabAddTabForm);
        
        this.showTabsTitles();
        this.tabSelected(this.selectedIndexTab);
    }

    showTabsTitles(){
        let html = '';
        let tabTitleWidth = 100 / this.tabs.length;
        let tabIndex = 0;
        
        for(let tab of this.tabs){
            html += `
                <div class="tab_title" id="tab_title_${tabIndex}" style="width:${tabTitleWidth}%;" onclick="${this.instanceName}.tabSelected(${tabIndex})">${tab.title}</div>
            `;
            tabIndex++;
        }
        
        document.querySelector(".multi_tab_head").innerHTML = html;
    }

    tabSelected(index){
        let previusSelectedTabTitle = document.querySelector(".tab_title_selected");
        if(previusSelectedTabTitle){
            previusSelectedTabTitle.className = "tab_title";
        }
        
        let selectedTab = this.tabs[index];
        if(selectedTab){
            selectedTab.show();
            
            let tabTitle = document.querySelector(`#tab_title_${index}`);
            if(tabTitle) tabTitle.className = "tab_title_selected";
        }
    }
    
    addNewTab(){
        let tabTitleField = document.querySelector("#tab_title");
        let tabContentField = document.querySelector("#tab_content");
        
        if(tabTitleField.value.length == 0){
            tabTitleField.focus();
            return;
        }
        
        if(tabContentField.value.length == 0){
            tabContentField.focus();
            return;
        }
        
        this.tabs.push(new Tab(tabTitleField.value, tabContentField.value, document.querySelector(".multi_tab_body")));
        
        this.showTabsTitles();
        this.tabSelected(this.tabs.length-1);
    }
}