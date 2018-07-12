const TABS_CONTAINER = document.querySelector('.tabs');
const TAB = document.querySelectorAll('.tabs');
const TAB_CONTENT = document.querySelector('.tabContent');
const FORM = document.querySelector('form');
const MAIN = document.querySelector('.main');

document.addEventListener('click', function (element) {
    if (element.target && element.target.id == `tab_main`) {
        showMainTab();
    } else if (element.target && element.target.id == `submit`) {
        submitHandler(element);
    }
})


function submitHandler(submitEvent) {
    submitEvent.preventDefault();

    let title = document.getElementById("titulo-tab").value;
    let content = document.getElementById("contenido-tab").value;
    let tab = new Tab(title, content);

    tab.addTab();

    resetForm();
}

function showMainTab() {

    const CONTENT_DIV = document.querySelectorAll('.content');
    const CONTENT_TO_SHOW = document.querySelector(`.content_main`);
    
    for (let content of CONTENT_DIV) {
        content.classList.remove('show');
        content.classList.add('hidden');
    }
    
    CONTENT_TO_SHOW.classList.add('show')
    
}

function resetForm() {
    document.getElementById("myForm").reset();
}