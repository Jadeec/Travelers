// WELCOME ANIMATION

const welcomeBox = document.querySelector('.welcome');

const welcomeAnimation = () => {
  setTimeout(() => {
    welcomeBox.classList.add('welcomeAnimate');
    clearInterval();
  }, 750);
};

document.addEventListener('DOMContentLoaded', () => {
  welcomeAnimation();
});

const transitionLinks = document.querySelectorAll('.transitionLink');
for (let i = 0; i < transitionLinks.length; i += 1) {
  transitionLinks[i].addEventListener('click', (e) => {
    e.preventDefault();
    welcomeBox.classList.remove('welcomeAnimate');
    setTimeout(() => {
      window.location = transitionLinks[i].href;
    }, 1000);
  });
}
