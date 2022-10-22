
let tabsLabelsReference, tabsContentReference;
tabsLabelsReference = document.querySelectorAll(".tab-label");
tabsContentReference = document.querySelectorAll(".tab");


function activateTab(index) {
    // activate the target tab
    tabsLabelsReference[index].classList.add("active");
    tabsContentReference[index].classList.add("active");

    // deactivate the other tabs
    for (let i=0; i < tabsLabelsReference.length; i++){
        if (i === index) {
            continue;
        }
        tabsLabelsReference[i].classList.remove("active");
        tabsContentReference[i].classList.remove("active");
    }
}

for (let i=0; i < tabsLabelsReference.length; i++){
    tabsLabelsReference[i].addEventListener("click", () => {activateTab(i);})
}


// set first tab to active
activateTab(0);
