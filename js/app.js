// Global Variables
const navMenu = document.getElementsByClassName('navbar__menu');
const navList = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section'); //"sections" variable to count the overall sections

// Store section id, title, link
//Manually storing information
// const sectionInfo = [
//     {id: 'section1', name: 'Section 1', link: '#section1'},
//     {id: 'section2', name: 'Section 2', link: '#section2'},
//     {id: 'section3', name: 'Section 3', link: '#section3'},
//     {id: 'section4', name: 'Section 4', link: '#section4'}
// ];

// Dynamically storing the section information

let section = []; //array to store information
// Listening the Changes that wil be made to DOM

document.addEventListener('DOMContentLoaded', dynamicallyUpdateSection);
document.addEventListener('DOMNodeInserted', dynamicallyUpdateSection);
document.addEventListener('DOMNodeRemoved', dynamicallyUpdateSection);

function dynamicallyUpdateSection(){
    section = Array.from(document.querySelectorAll('section')).map((section)=>({
        id: section.id,
        name: section.dataset.nav,
        link: `#${section.id}`
    }));
     
}
dynamicallyUpdateSection(); //Calling the function
console.log(section);


//"Counting Dynamic values of Sections" e.g if there are 3 sections there will be 3 section on navigation, 
// if added one more section then 4 sections will be visible on nav

for(const sectionIndex of section){
    const navItems = document.createElement('li');
    navItems.innerHTML = `<a href="${sectionIndex.link}" class="menu__link">${sectionIndex.name}</a>`;
    navList.appendChild(navItems);

}

 // Distinguishing the Sections with active state while on viewport
 document.addEventListener('scroll', function(){
     for(const numOfSection of sections){    
        const rect = numOfSection.getBoundingClientRect();
        const rectTop = rect.top.toFixed();
        // console.log(rect);
    
        if(rectTop <= 35 &&  rectTop >= 0){
            // console.log(listofClass);
            numOfSection.classList.add('active-class');
            
        }
        else if(rectTop <= -77){
            numOfSection.classList.remove('active-class');
        }
         else if(rectTop >= 200 | rectTop <=-77 && numOfSection.classList.contains('active-class') == true){
             numOfSection.classList.remove('active-class');
         }
         
        
     }
})


// Scroll to Section effect

navList.addEventListener('click', function(event){
    console.log(event);
    event.preventDefault();
   
    // const selected = document.getElementById(`section1`);

    const selected = document.querySelector(`section${event.target.hash}`);
    console.log(selected);

    // No need to change
    selected.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
    // selected.scrollTo({
    //     top: `${linkRect.top.toFixed()}`,
    //     left: `${linkRect.bottom.toFixed()}`,
    //     behavior: 'smooth',
        
    // });
     
})

// navList.addEventListener('click', function(event){
//     console.log(event);
//     event.preventDefault();
//     console.log(event.target.id);
   
//     // const section = document.getElementById("section1");
//     // console.log(section);
//     const selected = document.getElementById(`${}`);
//     const linkRect = selected.getBoundingClientRect();
//     console.log(linkRect);
//     console.log(selected);
//     selected.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
     
// })





