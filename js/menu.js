const menus=[{menu:"home",link:"index.html"},{menu:"asia",link:"asia.html"},{menu:"africa",link:"africa.html"},{menu:"north america",link:"northAmerica.html"},{menu:"south america",link:"southAmerica.html"},{menu:"europe",link:"europe.html"},{menu:"oceania",link:"oceania.html"}],imageMenuSrc="./assets/compass.svg",imageMenuAlt="find the north",menuTitle="TRAVELERS",navbar=document.querySelector(".navbar"),navbarNav=document.createElement("nav");navbarNav.classList.add("navbarNav"),navbar.appendChild(navbarNav);const hamburger=document.createElement("div");hamburger.classList.add("navbarHamburger"),navbarNav.appendChild(hamburger);for(let a=0;a<3;a+=1){const a=document.createElement("span");a.classList.add("navbarHamburgerSpan"),hamburger.appendChild(a)}const navbarTitleLink=document.createElement("a");navbarTitleLink.href="index.html",navbarTitleLink.classList.add("navbarTitleLink"),navbarTitleLink.classList.add("transitionLink"),navbarNav.appendChild(navbarTitleLink);const navbarTitle=document.createElement("h2");navbarTitle.classList.add("navbarTitle"),navbarTitle.innerHTML=menuTitle,navbarTitleLink.appendChild(navbarTitle);const image=document.createElement("img");image.src=imageMenuSrc,image.alt=imageMenuAlt,image.classList.add("navbarImage"),navbarNav.appendChild(image);const navbarUl=document.createElement("ul");navbarUl.classList.add("navbarUl"),navbarNav.appendChild(navbarUl);for(let a=0;a<menus.length;a+=1){const e=document.createElement("li");e.classList.add("navbarLi"),navbarUl.appendChild(e);const n=document.createElement("a");n.classList.add("navbarLink"),n.classList.add("transitionLink"),n.href=menus[a].link,n.innerHTML=menus[a].menu,e.appendChild(n),n.addEventListener("click",()=>{navbarUl.classList.remove("navbarUlShow")})}const hamburgerSpan=document.querySelectorAll(".navbarHamburgerSpan");hamburger.addEventListener("click",()=>{navbarUl.classList.toggle("navbarUlShow"),hamburgerSpan[0].classList.toggle("hamburgerTopSpanRotate"),hamburgerSpan[1].classList.toggle("hamburgerMiddleSpanHide"),hamburgerSpan[2].classList.toggle("hamburgerBottomSpanRotate")});