/****************************************************************************************
 **************************************** AOS INIT **************************************
 ***************************************************************************************/
AOS.init();


/****************************************************************************************
 **************************************** Variable **************************************
 ***************************************************************************************/
let navbar = document.getElementById('navbar');
let navbarNeon = document.getElementById('navbarNeon');
let homeOfPageNavbar = document.getElementById('homeOfPageNavbar');
let aboutMeNavbar = document.getElementById('aboutMeNavbar');
let skillNavbar = document.getElementById('skillNavbar');
let careerNavbar = document.getElementById('careerNavbar');
let PortfolioNavbar = document.getElementById('PortfolioNavbar');
let hamburgerNavbarbutton = document.getElementById('hamburgerNavbarbutton');
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
        window.scrollTo(0, 2010);
    } else {
        window.scrollTo(0, 2500);
    }

}
PortfolioNavbar.onclick = () => {
        if (window.innerWidth > 765) {
            window.scrollTo(0, 3420);
        } else {
            window.scrollTo(0, 3550);
        }

    }
    /****************************************************************************************
     **************************************** navbar mobile onclick ****************************
     ***************************************************************************************/
window.onmouseover = () => {
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
        PortfolioNavbar.setAttribute('data-bs-toggle', 'collapse');
        PortfolioNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        /** 
        *contact
        homeOfPageNavbar.setAttribute('data-bs-toggle', 'collapse');
        homeOfPageNavbar.setAttribute('data-bs-target', '#navbarSupportedContent'); */
    } else {
        homeOfPageNavbar.removeAttribute('data-bs-toggle');
        homeOfPageNavbar.removeAttribute('data-bs-target');
        //Présentation
        aboutMeNavbar.removeAttribute('data-bs-toggle');
        aboutMeNavbar.removeAttribute('data-bs-target');
        //Compétences
        skillNavbar.removeAttribute('data-bs-toggle');
        skillNavbar.setAttriburemoveAttributete('data-bs-target');
        //Parcours
        careerNavbar.removeAttribute('data-bs-toggle');
        careerNavbar.removeAttribute('data-bs-target');

        //réalisation
        PortfolioNavbar.removeAttribute('data-bs-toggle');
        PortfolioNavbar.removeAttribute('data-bs-target');
        /** 
        *contact
        homeOfPageNavbar.removeAttribute('data-bs-toggle', 'collapse');
        homeOfPageNavbar.removeAttribute('data-bs-target', '#navbarSupportedContent'); */
    }
}

/****************************************************************************************
 **************************************** Header chevron onclick ****************************
 ***************************************************************************************/
chevronHeader.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 710);
    } else {
        window.scrollTo(0, 620);
    }
}

/****************************************************************************************
 **************************************** timeline End Button ****************************
 ***************************************************************************************/
timelineBadgeEnd.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 2010);
    } else {
        window.scrollTo(0, 2480);
    }
}

/****************************************************************************************
 **************************************** Home Bottom Button ****************************
 ***************************************************************************************/
homeBottomButton.onclick = () => {
    window.scrollTo(0, 0);
}