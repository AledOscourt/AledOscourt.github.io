/****************************************************************************************
 **************************************** AOS INIT **************************************
 ***************************************************************************************/
AOS.init();


/****************************************************************************************
 **************************************** Variable **************************************
 ***************************************************************************************/
/*-----------------------------variable navbar-----------------------------*/


//Empéche la sélection de texte dans le document ainsi que le dblclick
document.addEventListener('mousedown', function(e) { e.preventDefault(); }, false);
/****************************************************************************************
 **************************************** Navbar ****************************************
 ***************************************************************************************/
window.onscroll = () => {
    if (window.scrollY >= 10) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.8)';
        navbar.style.boxShadow = '0px 0px 2px #e840ba, 0px 0px 5px #020402, 0px 0px 12px #e840ba, 0px 0px 15px #6e41be, 0px 0px 18px #020402, 0px 0px 20px #6e41be';
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
contactNavbar.onclick = () => {
    if (window.innerWidth > 765) {
        window.scrollTo(0, 3180);
    } else {
        window.scrollTo(0, 3340);
    }
}

networksNavbar.onclick = () => {
    window.scrollTo(0, 4750);

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
        //contact
        contactNavbar.setAttribute('data-bs-toggle', 'collapse');
        contactNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
        //mes réseaux
        networksNavbar.setAttribute('data-bs-toggle', 'collapse');
        networksNavbar.setAttribute('data-bs-target', '#navbarSupportedContent');
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
    window.scrollTo(0, 2050);
}

/****************************************************************************************
 **************************************** Home Bottom Button ****************************
 ***************************************************************************************/
homeBottomButton.onclick = () => {
    window.scrollTo(0, 0);
}
