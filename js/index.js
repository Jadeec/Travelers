//NAVBAR

const menus = [
  {
    menu: "home",
    link: "index.html"
  },
  {
    menu: "asia",
    link: "asia.html"
  },
  {
    menu: "africa",
    link: "africa.html"
  },
  {
    menu: "north america",
    link: "northAmerica.html"
  },
  {
    menu: "south america",
    link: "southAmerica.html"
  },
  {
    menu: "europe",
    link: "europe.html"
  },
  {
    menu: "oceania",
    link: "oceania.html"
  },
];

const imageMenuSrc = "./assets/compass.svg";
const imageMenuAlt = "find the north";
const menuTitle = "TRAVELERS";

const navbar = document.querySelector(".navbar");
const navbarNav = document.createElement("nav");
navbarNav.classList.add("navbar--nav");
navbar.appendChild(navbarNav);

const hamburger = document.createElement("div");
hamburger.classList.add("navbar--hamburger");
navbarNav.appendChild(hamburger);

for(let i = 0; i < 3; i++) {
  const hamburgerSpan = document.createElement("span");
  hamburgerSpan.classList.add("navbar--hamburger-span");
  hamburger.appendChild(hamburgerSpan);
}

const navbarTitleLink = document.createElement("a");
navbarTitleLink.href = "index.html";
navbarTitleLink.classList.add("navbar--title-link");
navbarNav.appendChild(navbarTitleLink);

const navbarTitle = document.createElement("h2");
navbarTitle.classList.add("navbar--title");
navbarTitle.innerHTML = menuTitle;
navbarTitleLink.appendChild(navbarTitle);

const image = document.createElement("img");
image.src = imageMenuSrc;
image.alt = imageMenuAlt;
image.classList.add("navbar--image");
navbarNav.appendChild(image);

const navbarUl = document.createElement("ul");
navbarUl.classList.add("navbar--ul");
navbarNav.appendChild(navbarUl);

for(let i = 0; i < menus.length; i++) {
  const navbarLi = document.createElement("li");
  navbarLi.classList.add("navbar--li");
  navbarUl.appendChild(navbarLi);
  const navbarLink = document.createElement("a");
  navbarLink.classList.add("navbar--link");
  navbarLink.href = menus[i].link;
  navbarLink.innerHTML = menus[i].menu
  navbarLi.appendChild(navbarLink);
  navbarLink.addEventListener("click", () => {
      navbarUl.classList.remove("navbar--ul-show");
  })
}

hamburger.addEventListener("click", () => {
  navbarUl.classList.toggle("navbar--ul-show");
})
