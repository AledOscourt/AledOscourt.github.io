/****************************************************************************************
 **************************************** AOS INIT **************************************
 ***************************************************************************************/
AOS.init();


/****************************************************************************************
 **************************************** Variable **************************************
 ***************************************************************************************/
/*-----------------------------variable navbar-----------------------------*/

let navbar = document.getElementById('navbar');
let navbarNeon = document.getElementById('navbarNeon');
let homeOfPageNavbar = document.getElementById('homeOfPageNavbar');
let aboutMeNavbar = document.getElementById('aboutMeNavbar');
let skillNavbar = document.getElementById('skillNavbar');
let careerNavbar = document.getElementById('careerNavbar');
let portfolioNavbar = document.getElementById('portfolioNavbar');
let contactNavbar = document.getElementById('contactNavbar');
let hamburgerNavbarbutton = document.getElementById('hamburgerNavbarbutton');
/*-----------------------------variable other-----------------------------*/
let aboutMeContact = document.getElementById('aboutMeContact');
let chevronHeader = document.getElementById('chevronHeader');
let timelineBadgeEnd = document.getElementById('timelineBadgeEnd');
let homeBottomButton = document.getElementById('homeBottomButton');
//Empéche la sélection de texte dans le document ainsi que le dblclick
document.addEventListener('mousedown', function(e) { e.preventDefault(); }, false);
/****************************************************************************************
 **************************************** Navbar ****************************************
 ***************************************************************************************/
window.onscroll = () => {
    if (window.scrollY >= 10) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.8)';
        navbar.style.boxShadow = '0px 0px 2px #FFFAFA, 0px 0px 5px #e840ba, 0px 0px 12px #020402, 0px 0px 15px #e840ba, 0px 0px 18px #020402, 0px 0px 20px #e840ba';
    } else if (window.innerWidth > 756) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.2)';
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.8)';
        navbar.style.boxShadow = 'none';
    }
    if (window.scrollY >= 400) {
        homeBottomButton.classList.remove('d-none');
    } else {
        homeBottomButton.classList.add('d-none');
    }
}

window.onload = () => {
    let typed = new Typed('#formationHeader', {
        strings: [, 'DÉVELOPPEUR WEB^1500', 'FULL STACK JUNIOR^1500'],
        typeSpeed: 80,
        backSpeed: 90,
        showCursor: false,
        loop: true,
    });
}

/****************************************************************************************
 **************************************** Navbar nav onclick ****************************
 ***************************************************************************************/
homeOfPageNavbar.onclick = () => {
    window.scrollTo(0, 0);
}

aboutMeNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 710);
    } else {
        window.scrollTo(0, 620);
    }
}

skillNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 1210);
    } else {
        window.scrollTo(0, 1670);
    }
}

careerNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 2050);
    } else {
        window.scrollTo(0, 2480);
    }

}
portfolioNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 3180);
    } else {
        window.scrollTo(0, 3340);
    }
}
contactNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 3400);
    } else {
        window.scrollTo(0, 4200);
    }
}

/****************************************************************************************
 **************************************** navbar mobile onclick ****************************
 ***************************************************************************************/
hamburgerNavbarbutton.onclick = () => {
    if (window.innerWidth < 756) {
        //Accueil
        homeOfPageNavbar.setAttribute('data-bs-toggle', 'collapse');
        homeOfPageNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        //Présentation
        aboutMeNavbar.setAttribute('data-bs-toggle', 'collapse');
        aboutMeNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        //Compétences
        skillNavbar.setAttribute('data-bs-toggle', 'collapse');
        skillNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        //Parcours
        careerNavbar.setAttribute('data-bs-toggle', 'collapse');
        careerNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');

        //réalisation
        portfolioNavbar.setAttribute('data-bs-toggle', 'collapse');
        portfolioNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        //contact
        contactNavbar.setAttribute('data-bs-toggle', 'collapse');
        contactNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
    }
}

/****************************************************************************************
 **************************************** Header chevron onclick ************************
 ***************************************************************************************/
chevronHeader.onclick = () => {
        if (window.innerWidth > 765) {
            window.scrollTo(0, 710);
        } else {
            window.scrollTo(0, 620);
        }
    }
    /****************************************************************************************
     **************************************** Header chevron onclick ************************
     ***************************************************************************************/
aboutMeContact.onclick = () => {
        if (window.innerWidth > 765) {
            window.scrollTo(0, 3400);
        } else {
            window.scrollTo(0, 3600);
        }
    }
    /****************************************************************************************
     **************************************** timeline End Button ****************************
     ***************************************************************************************/
timelineBadgeEnd.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 2010);
    } else {
        window.scrollTo(0, 2400);
    }
}

/****************************************************************************************
 **************************************** Home Bottom Button ****************************
 ***************************************************************************************/
homeBottomButton.onclick = () => {
    window.scrollTo(0, 0);
}