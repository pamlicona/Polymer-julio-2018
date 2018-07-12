const tabsContentButtons = document.querySelector('.tab');
const tabsContent = document.querySelector('.tabscontent');

// Functions for show content tab
let showTab = (event, idTab) => {
  showContent(idTab);
  activeTab(event);
}

let showContent = idTab => {
  let contents = document.querySelectorAll('.tabcontent');
  for(let tab of contents) {
     tab.style.display = 'none';
  }
  document.getElementById(idTab).style.display = 'block';
}

let activeTab = event => {
  let tabsButton = document.querySelectorAll('.tab__link');
  for(let button of tabsButton) {
     button.classList.remove('active');
  }
  event.currentTarget.className += " active";
}

// Function for create new tab
let getValues = () => {
  let titleTab = document.getElementById('titleTab').value;
  let contentTab = document.getElementById('contentTab').value;
  return { titleTab, contentTab };
}

let createTab = () => {
  let { titleTab, contentTab } = getValues();
  let tab = new Tab(titleTab, contentTab);
  tab.createTab();
}

// Function for get id for new tab
let camelcase = (str) => {
  return str.replace(/\W+(.)/g, function(match, chr){
    return chr.toUpperCase();
  });
}

// Class for create tab
class Tab {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = camelcase(this.title);
  }

  createTab() {
    tabsContentButtons.innerHTML += `<button class="tab__link" onclick="showTab(event, '${this.id}')">${this.title}</button>`
    tabsContent.innerHTML += `<div class="tabcontent" id=${this.id}><p>${this.content}</p></div>`
  }
}
