let workContainer = document.getElementById('work-container');
let workItemContainer = document.getElementById('work-item-container');
let contactContainer = document.getElementById('contact-container');
let contactItemContainer = document.getElementById('contact-item-container');
let resumeContainer = document.getElementById('resume-container');
let resumeItemContainer = document.getElementById('resume-item-container');
let aboutContainer = document.getElementById('about-container');
let aboutItemContainer = document.getElementById('about-item-container');

let portrait = window.matchMedia("(orientation: portrait)");
let portraitMatch = window.matchMedia("(orientation: portrait)").matches;

let workShow;
let contactShow;
let resumeShow;

workContainer.addEventListener('mouseover', () => {
    if (portraitMatch == false) {
        workItemContainer.style.height = 'auto';
    workItemContainer.style.opacity = '1';
    } else {
        workItemContainer.style.display = 'block';
    }
    workShow = true;
})

workContainer.addEventListener('mouseout', () => {
    if (portraitMatch == false) {
        workItemContainer.style.height = '0';
        workItemContainer.style.opacity = '0';
    } else {
        workItemContainer.style.display = 'none';
    }
    workShow = false;
})

contactContainer.addEventListener('mouseover', () => {
    if (portraitMatch == false) {
        contactItemContainer.style.height = 'auto';
    contactItemContainer.style.opacity = '1';
    } else {
        contactItemContainer.style.display = 'block';
    }
    contactShow = true;
})

contactContainer.addEventListener('mouseout', () => {
    if (portraitMatch == false) {
        contactItemContainer.style.height = '0';
    contactItemContainer.style.opacity = '0';
    } else {
        contactItemContainer.style.display = 'none';
    }
    contactShow = false;
})

resumeContainer.addEventListener('mouseover', () => {
    if (portraitMatch == false) {
        resumeItemContainer.style.height = 'auto';
    resumeItemContainer.style.opacity = '1';
    } else {
        resumeItemContainer.style.display = 'block';
    }
    resumeShow = true;
})

resumeContainer.addEventListener('mouseout', () => {
    if (portraitMatch == false) {
        resumeItemContainer.style.height = '0';
    resumeItemContainer.style.opacity = '0';
    } else {
        resumeItemContainer.style.display = 'none';
    }
    resumeShow = false;
})


portrait.addEventListener("change", function(e) {
    if(e.matches) {
        // Portrait mode
        portraitMatch = true;

        workItemContainer.style.height = 'auto';
        workItemContainer.style.opacity = '1';
        contactItemContainer.style.height = 'auto';
        contactItemContainer.style.opacity = '1';
        resumeItemContainer.style.height = 'auto';
        resumeItemContainer.style.opacity = '1';

        if(workShow) {
            workItemContainer.style.display = 'block';
        } else {
            workItemContainer.style.display = 'none';
        }

        if(contactShow) {
            contactItemContainer.style.display = 'block';
        } else {
            contactItemContainer.style.display = 'none';
        }

        if(resumeShow) {
            resumeItemContainer.style.display = 'block';
        } else {
            resumeItemContainer.style.display = 'none';
        }
    } else {
        portraitMatch = false;

        workItemContainer.style.display = 'block';
            contactItemContainer.style.display = 'block';
            resumeItemContainer.style.display = 'block';

        if(workShow) {
            workItemContainer.style.height = 'auto';
        workItemContainer.style.opacity = '1';
        } else {
            workItemContainer.style.height = '0';
        workItemContainer.style.opacity = '0';
        }

        if(contactShow) {
        contactItemContainer.style.height = 'auto';
        contactItemContainer.style.opacity = '1';
        } else {
        contactItemContainer.style.height = '0';
        contactItemContainer.style.opacity = '0';
        }

        if(resumeShow) {
        resumeItemContainer.style.height = 'auto';
        resumeItemContainer.style.opacity = '1';
        } else {
        resumeItemContainer.style.height = '0';
        resumeItemContainer.style.opacity = '0';
        }
    }

   
})

