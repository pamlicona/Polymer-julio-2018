
const contentTab = document.querySelector('.tab');
const contentTabs = document.querySelector('.contentTabs');

document.getElementById('defaultOpen').click();

function openTab(evt, id) {
    let tabcontents, tablinks;

    tabcontents = document.getElementsByClassName('tabcontent');
    for(let tabcontent of  tabcontents){
      tabcontent.style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for(tablink of tablinks){
      tablink.className = tablink.className.replace(' active', '');
    }

    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
}


function guardaTab(){
  let currentTab = document.getElementsByClassName('tablinks').length + 1;
  const title = document.getElementById('title');
  const content = document.getElementById('content');

  contentTab.innerHTML += `<button
                            class='tablinks'
                            onclick='openTab(event, ${currentTab})'>
                              ${title.value}
                           </button>`;
  contentTabs.innerHTML += `<div id="${currentTab}" class="tabcontent">
                              ${content.value}
                            </div>`;
}
