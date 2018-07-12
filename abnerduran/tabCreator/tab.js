class Tab {

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    addTab() {

        const tabNumber = this.getTabNumber();

        TABS_CONTAINER.innerHTML += `<div class="tab tab_${tabNumber}" id="tab_${tabNumber}">${this.title}</div>`;

        // Add content
        this.addContent(tabNumber);

        // Add listener
        this.addEventListener(tabNumber);

    }

    getTabNumber() {
        return Math.floor(Date.now() / 1000) + Math.round(Math.random() * 10);
    }

    addContent(contentNumber) {
        TAB_CONTENT.innerHTML += `<div class="content content_${contentNumber} hidden">${this.content}</div>`;
    }

    addEventListener(tabNumber) {

        document.addEventListener('click', function (element) {
            if (element.target && element.target.id == `tab_${tabNumber}`) {

                const CONTENT_DIV = document.querySelectorAll('.content');
                const CONTENT_TO_SHOW = document.querySelector(`.content_${tabNumber}`);

                for (const content of CONTENT_DIV) {
                    content.classList.remove('show');
                    content.classList.add('hidden');
                }

                CONTENT_TO_SHOW.classList.add('show')
            }
        })
    }

}

let tab = new Tab('tab de pruebas', 'contenido pruebas');
tab.addTab();
let tab1 = new Tab('tab1', 'contenido 1');
tab1.addTab();
let tab2 = new Tab('tab 2', 'contenido 2');
tab2.addTab();