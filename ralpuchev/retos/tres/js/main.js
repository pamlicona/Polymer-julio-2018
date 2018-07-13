var multiTabController = null;

function startMultiTabController(){
    multiTabController = new MultiTabController(document.querySelector(".multi_tab_controller_container"), "multiTabController");
    multiTabController.show();
}