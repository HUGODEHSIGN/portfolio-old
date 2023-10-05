let workContainer = document.getElementById('work-container');
let workItemContainer = document.getElementById('work-item-container');
let contactContainer = document.getElementById('contact-container');
let contactItemContainer = document.getElementById('contact-item-container');
let resumeContainer = document.getElementById('resume-container');
let resumeItemContainer = document.getElementById('resume-item-container');
let aboutContainer = document.getElementById('about-container');
let aboutItemContainer = document.getElementById('about-item-container');

let menuContainer = document.getElementById('menu-container')

const hamburgerIcon = document.getElementById('hamburger-container');
let hamburgers = document.getElementsByClassName("hamburger");

const backDrop = document.getElementById('back-drop');
let backDropShow;

portrait.addEventListener("change", function (e) {
    if (e.matches) {
      // Portrait mode
      portraitMatch = true;
      removeShowEventListener();
      showEverything();
      menuContainer.style.display = 'none';
    } else {
        // Landscape
      portraitMatch = false;
      addShowEventListener();
      showNothing();
      menuContainer.style.display = 'flex';
    }
  });

  function showWork () {
    workItemContainer.style.display = 'block';
    backDrop.style.transform = 'translate(5vw,0)';
    menuContainer.style.color = 'white';
  }

  function hideWork () {
    workItemContainer.style.display = 'none';
        backDrop.style.transform = 'translate(100vw,0)';
        menuContainer.style.color = 'black';
  }

  function showContact () {
    contactItemContainer.style.display = 'block';
        backDrop.style.transform = 'translate(5vw,0)';
        menuContainer.style.color = 'white';
  }

  function hideContact () {
    contactItemContainer.style.display = 'none';
        backDrop.style.transform = 'translate(100vw,0)';
        menuContainer.style.color = 'black';
  }

  function showResume () {
    resumeItemContainer.style.display = 'block';
        backDrop.style.transform = 'translate(5vw,0)';
        menuContainer.style.color = 'white';
  }

  function hideResume () {
    resumeItemContainer.style.display = 'none';
        backDrop.style.transform = 'translate(100vw,0)';
        menuContainer.style.color = 'black';
  }

  function showEverything () {
    workItemContainer.style.display = 'block';
    contactItemContainer.style.display = 'block';
    resumeItemContainer.style.display = 'block';
  }

  function showNothing () {
    hideWork();
    hideContact();
    hideResume();
  }  
  
function addShowEventListener() {
    workContainer.addEventListener('mouseover', showWork);
    
    workContainer.addEventListener('mouseout', hideWork);
    
    contactContainer.addEventListener('mouseover', showContact);
    
    contactContainer.addEventListener('mouseout', hideContact);
    
    resumeContainer.addEventListener('mouseover', showResume);
    
    resumeContainer.addEventListener('mouseout', hideResume);
}

function removeShowEventListener() {
    workContainer.removeEventListener('mouseover', showWork);
    
    workContainer.removeEventListener('mouseout', hideWork);
    
    contactContainer.removeEventListener('mouseover', showContact);
    
    contactContainer.removeEventListener('mouseout', hideContact);
    
    resumeContainer.removeEventListener('mouseover', showResume);
    
    resumeContainer.removeEventListener('mouseout', hideResume);
}

  if (portraitMatch == false) {
    workContainer.addEventListener('mouseover', showWork)
    
    workContainer.addEventListener('mouseout', hideWork)
    
    contactContainer.addEventListener('mouseover', showContact)
    
    contactContainer.addEventListener('mouseout', hideContact)
    
    resumeContainer.addEventListener('mouseover', showResume)
    
    resumeContainer.addEventListener('mouseout', hideResume)
  }

hamburgerIcon.addEventListener('click', () => {
    if (backDropShow) {
        menuContainer.style.display = 'none';
        backDrop.style.transform = 'translate(100vw,0)';
        backDropShow = false;

        for (var i = 0; i < hamburgers.length; i++) {
            var hamburger = hamburgers[i];
           hamburger.style.backgroundColor = 'black';
        }

        hamburgerIcon.style.border = 'solid black'
        menuContainer.style.color = 'black';
    } else {
        menuContainer.style.display = 'flex';
        backDrop.style.transform = 'translate(5vw,0)';
        backDropShow = true;

        for (var i = 0; i < hamburgers.length; i++) {
            var hamburger = hamburgers[i];
           hamburger.style.backgroundColor = 'white';
        }

        hamburgerIcon.style.border = 'solid white'
        menuContainer.style.color = 'white';
    }
})

hamburgerIcon.addEventListener('mouseover', () => {
  for (var i = 0; i < hamburgers.length; i++) {
    var hamburger = hamburgers[i];
   hamburger.style.backgroundColor = '#4dbd95';
}

hamburgerIcon.style.border = 'solid #4dbd95'

})

hamburgerIcon.addEventListener('mouseout', () => {
  if (backDropShow) {
    for (var i = 0; i < hamburgers.length; i++) {
      var hamburger = hamburgers[i];
     hamburger.style.backgroundColor = 'white';
  }
  hamburgerIcon.style.border = 'solid white'
  } else {

    for (var i = 0; i < hamburgers.length; i++) {
      var hamburger = hamburgers[i];
     hamburger.style.backgroundColor = 'black';
  }
  hamburgerIcon.style.border = 'solid black'

  }

})
