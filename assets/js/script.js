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
let chevronHeader = document.getElementById('chevronHeader');
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
        navbar.style.backgroundColor = 'rgba(0,0,0,0.5)';
        navbar.style.boxShadow = 'none';
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
    window.scrollTo(0, 710);
}

skillNavbar.onclick = () => {
    window.scrollTo(0, 1210);
}

careerNavbar.onclick = () => {
    window.scrollTo(0, 2000);
}

/****************************************************************************************
 **************************************** Header chevron onclick ****************************
 ***************************************************************************************/
chevronHeader.onclick = () => {
    window.scrollTo(0, 710);

}