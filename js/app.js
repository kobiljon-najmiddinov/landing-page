// Global Variables
const navMenu = document.getElementsByClassName('navbar__menu');
const navList = document.getElementById('navbar__list');

const sections = document.getElementsByTagName('section'); //"sections" variable to count the overall sections

//"Counting Dynamic values of Sections" e.g if there are 3 sections there will be 3 section on navigation, 
// if added one more section then 4 sections will be visible on nav
function getSections(sections) {
    //Looping over and printing data-nav information
    //using dataset property to read/write data attribute(data-*)
    for (const sectionData of sections) {

        const navData = sectionData.dataset.nav;

        navList.insertAdjacentHTML("afterbegin", `<li>${navData}</li>`);

    }

}

getSections(sections);

//Navigation creation




