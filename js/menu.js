// NAVBAR

const menus = [
  {
    menu: 'home',
    link: 'index.html',
  },
  {
    menu: 'asia',
    link: 'asia.html',
  },
  {
    menu: 'africa',
    link: 'africa.html',
  },
  {
    menu: 'north america',
    link: 'northAmerica.html',
  },
  {
    menu: 'south america',
    link: 'southAmerica.html',
  },
  {
    menu: 'europe',
    link: 'europe.html',
  },
  {
    menu: 'oceania',
    link: 'oceania.html',
  },
];

const imageMenuSrc = './assets/compass.svg';
const imageMenuAlt = 'find the north';
const menuTitle = 'TRAVELERS';

const navbar = document.querySelector('.navbar');
const navbarNav = document.createElement('nav');
navbarNav.classList.add('navbarNav');
navbar.appendChild(navbarNav);

const hamburger = document.createElement('div');
hamburger.classList.add('navbarHamburger');
navbarNav.appendChild(hamburger);

for (let i = 0; i < 3; i += 1) {
  const hamburgerSpan = document.createElement('span');
  hamburgerSpan.classList.add('navbarHamburgerSpan');
  hamburger.appendChild(hamburgerSpan);
}

const navbarTitleLink = document.createElement('a');
navbarTitleLink.href = 'index.html';
navbarTitleLink.classList.add('navbarTitleLink');
navbarTitleLink.classList.add('transitionLink');
navbarNav.appendChild(navbarTitleLink);

const navbarTitle = document.createElement('h2');
navbarTitle.classList.add('navbarTitle');
navbarTitle.innerHTML = menuTitle;
navbarTitleLink.appendChild(navbarTitle);

const image = document.createElement('img');
image.src = imageMenuSrc;
image.alt = imageMenuAlt;
image.classList.add('navbarImage');
navbarNav.appendChild(image);

const navbarUl = document.createElement('ul');
navbarUl.classList.add('navbarUl');
navbarNav.appendChild(navbarUl);

for (let i = 0; i < menus.length; i += 1) {
  const navbarLi = document.createElement('li');
  navbarLi.classList.add('navbarLi');
  navbarUl.appendChild(navbarLi);
  const navbarLink = document.createElement('a');
  navbarLink.classList.add('navbarLink');
  navbarLink.classList.add('transitionLink');
  navbarLink.href = menus[i].link;
  navbarLink.innerHTML = menus[i].menu;
  navbarLi.appendChild(navbarLink);
  navbarLink.addEventListener('click', () => {
    navbarUl.classList.remove('navbarUlShow');
  });
}

const hamburgerSpan = document.querySelectorAll('.navbarHamburgerSpan');

hamburger.addEventListener('click', () => {
  navbarUl.classList.toggle('navbarUlShow');
  hamburgerSpan[0].classList.toggle('hamburgerTopSpanRotate');
  hamburgerSpan[1].classList.toggle('hamburgerMiddleSpanHide');
  hamburgerSpan[2].classList.toggle('hamburgerBottomSpanRotate');
});
