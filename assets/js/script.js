let navbar = document.getElementById('navbar');
let navbarNeon = document.getElementById('navbarNeon')
window.onscroll = () => {
    if (window.scrollY >= 10) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.7)';
        navbar.style.boxShadow = '0px 0px 2px #FFFAFA, 0px 0px 5px #e840ba, 0px 0px 15px 2px #FFFAFA, 0px 0px 20px 5px #e840ba';
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
        strings: [, 'DÉVELOPPEUR WEB ...^1500', 'ET WEB MOBILE JUNIOR^1500'],
        typeSpeed: 80,
        backSpeed: 90,
        showCursor: false,
        loop: true,
    });
}