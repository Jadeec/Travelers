const welcomeBox=document.querySelector(".welcome"),welcomeAnimation=()=>{setTimeout(()=>{welcomeBox.classList.add("welcomeAnimate"),clearInterval()},750)};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{welcomeBox.classList.add("welcomeAnimate"),clearInterval()},750)});const transitionLinks=document.querySelectorAll(".transitionLink");for(let e=0;e<transitionLinks.length;e+=1)transitionLinks[e].addEventListener("click",t=>{t.preventDefault(),welcomeBox.classList.remove("welcomeAnimate"),setTimeout(()=>{window.location=transitionLinks[e].href},1e3)});
