// Global Variables
const navMenu = document.getElementsByClassName('navbar__menu');
const navList = document.getElementById('navbar__list');

const sections = document.getElementsByTagName('section'); //"sections" variable to count the overall sections

const listOfClasses = sections.classList;
console.log(sections);

//"Counting Dynamic values of Sections" e.g if there are 3 sections there will be 3 section on navigation, 
// if added one more section then 4 sections will be visible on nav

for (const sectionData of sections) {
    const sectionId = sectionData.id; //Id of section tag to link anchor, Ex. id with "section1"
    const navData = sectionData.dataset.nav;

    const listofClass = sectionData.classList;
    // console.log(listofClass);

    getSections(sectionId, navData, listofClass);

}

function getSections(sectionId, navData, listofClass) {
    navList.innerHTML += `<a href="#${sectionId}" class="menu__link"><li>${navData}</li></a>`;

    const sectionView = document.getElementById(`${sectionId}`);
    
    document.addEventListener('scroll', function(e){
        console.log(e);
        const rectTop = sectionView.getBoundingClientRect().top.toFixed();
        console.log(rectTop);
        if(rectTop <= 35 &&  rectTop >= 0){
            console.log(listofClass);
            listofClass.add('active-class');
            
        }
        else if(rectTop <= -77){
            listofClass.remove('active-class');
        }
         else if(rectTop >= 200 | rectTop <=-77 && listofClass.contains('active-class') == true){
             listofClass.remove('active-class');
         }
    })
    
    
    
    
    
}

//Distinguishing the Sections while on viewport
// const sectionWithID = document.getElementById('section1');
// let rect = sectionWithID.getBoundingClientRect().top.toFixed();
// console.log(rect);

const sectionWithQuery = document.querySelectorAll('section');
console.log(sectionWithQuery);

// navList.addEventListener("click", (e) => {



// })
