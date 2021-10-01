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
navbarNav.classList.add("navbarNav");
navbar.appendChild(navbarNav);

const hamburger = document.createElement("div");
hamburger.classList.add("navbarHamburger");
navbarNav.appendChild(hamburger);

for(let i = 0; i < 3; i++) {
  const hamburgerSpan = document.createElement("span");
  hamburgerSpan.classList.add("navbarHamburgerSpan");
  hamburger.appendChild(hamburgerSpan);
}

const navbarTitleLink = document.createElement("a");
navbarTitleLink.href = "index.html";
navbarTitleLink.classList.add("navbarTitleLink");
navbarTitleLink.classList.add("transitionLink");
navbarNav.appendChild(navbarTitleLink);

const navbarTitle = document.createElement("h2");
navbarTitle.classList.add("navbarTitle");
navbarTitle.innerHTML = menuTitle;
navbarTitleLink.appendChild(navbarTitle);

const image = document.createElement("img");
image.src = imageMenuSrc;
image.alt = imageMenuAlt;
image.classList.add("navbarImage");
navbarNav.appendChild(image);

const navbarUl = document.createElement("ul");
navbarUl.classList.add("navbarUl");
navbarNav.appendChild(navbarUl);

for(let i = 0; i < menus.length; i++) {
  const navbarLi = document.createElement("li");
  navbarLi.classList.add("navbarLi");
  navbarUl.appendChild(navbarLi);
  const navbarLink = document.createElement("a");
  navbarLink.classList.add("navbarLink");
  navbarLink.classList.add("transitionLink");
  navbarLink.href = menus[i].link;
  navbarLink.innerHTML = menus[i].menu
  navbarLi.appendChild(navbarLink);
  navbarLink.addEventListener("click", () => {
      navbarUl.classList.remove("navbarUlShow");
  })
}

const hamburgerSpan = document.querySelectorAll(".navbarHamburgerSpan");

hamburger.addEventListener("click", () => {
  navbarUl.classList.toggle("navbarUlShow");
  hamburgerSpan[0].classList.toggle("hamburgerTopSpanRotate");
  hamburgerSpan[1].classList.toggle("hamburgerMiddleSpanHide");
  hamburgerSpan[2].classList.toggle("hamburgerBottomSpanRotate");
})

//WELCOME ANIMATION

const welcomeBox = document.querySelector(".welcome");

const welcomeAnimation = () => {
  setTimeout(() => {
    welcomeBox.classList.add("welcomeAnimate");
    clearInterval();
  }, 750);
}

document.addEventListener("DOMContentLoaded", () => {
  welcomeAnimation();
});

const transitionLinks = document.querySelectorAll(".transitionLink");
for(let i = 0; i < transitionLinks.length; i++) {
  transitionLinks[i].addEventListener("click", (e) => {
    e.preventDefault();
    welcomeBox.classList.remove("welcomeAnimate");
    setTimeout(() => {
      window.location = transitionLinks[i].href;
    }, 1000);
  })
}

//FOOTER

const team = [
  {
    name: "Jade Clairicia",
    github: "https://github.com/Jadeec"
  },
  {
    name: "Karim Boudjemai",
    github: "https://github.com/Kariim42"
  },
  {
    name: "Camille Frelat",
    github: "https://github.com/camfrelat"
  },
  {
    name: "Anthony Charretier",
    github: "https://github.com/innermost47"
  },
];

const footer = document.querySelector(".footer");
const titleForFooter = "Travelers - 2021";

const footerTitle = document.createElement("h2");
footerTitle.classList.add("footerTitle");
footerTitle.innerHTML = titleForFooter;
footer.appendChild(footerTitle);

const teamName = document.createElement("h2");
teamName.classList.add("teamName");

for (let i = 0; i < team.length; i++) {
  const teamMember = document.createElement("p");
  teamMember.classList.add("footerLink");
  if(i === team.length - 1) {
    teamMember.innerHTML = team[i].name;
  } else {
    teamMember.innerHTML = team[i].name + " |";
  }
  footer.appendChild(teamMember);

  teamMember.addEventListener("click", () => {
    darkBackground.classList.toggle("showDarkBackground");
    newPopup.classList.toggle("showPopup");
    teamName.innerHTML = "";
    teamName.innerHTML = team[i].name;
    newPopup.appendChild(teamName);
  })
}

//POPUP

const darkBackground = document.createElement("div");
darkBackground.classList.add("darkBackground");
document.body.appendChild(darkBackground);

const newPopup = document.createElement("div");
newPopup.classList.add("newPopup");
document.body.appendChild(newPopup);
const cross = document.createElement("div");
cross.classList.add("cross");
cross.innerHTML = "&#10005;";
newPopup.appendChild(cross);

cross.addEventListener("click", () => {
  darkBackground.classList.toggle("showDarkBackground");
  newPopup.classList.toggle("showPopup");
})


//INTERSECTION OBSERVER FOR LAZY LOADING

const images = document.querySelectorAll('.pagesImages');

let imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        const newSrc = image.getAttribute('data-src')
        image.src = newSrc;
        console.log(image);
        imgObserver.unobserve(entry.target);
    });
});

images.forEach((image) => {
    imgObserver.observe(image);
})
