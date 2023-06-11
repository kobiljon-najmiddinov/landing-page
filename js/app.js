// Global Variables
const navMenu = document.getElementsByClassName('navbar__menu');
const navList = document.getElementById('navbar__list');

const sections = document.getElementsByTagName('section'); //"sections" variable to count the overall sections

const listOfClasses = navList.classList;
console.log(sections);

//"Counting Dynamic values of Sections" e.g if there are 3 sections there will be 3 section on navigation, 
// if added one more section then 4 sections will be visible on nav

for (const sectionData of sections) {
    const sectionId = sectionData.id; //Id of section tag to link anchor, Ex. id with "section1"
    const navData = sectionData.dataset.nav;

    getSections(sectionId, navData);

}

function getSections(sectionId, navData) {
    navList.innerHTML += `<a href="#${sectionId}" class="menu__link"><li>${navData}</li></a>`;
}



navList.addEventListener("click", (e) => {
    console.log(listOfClasses);

})


